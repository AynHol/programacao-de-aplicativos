import Product from "../entity/Product";
import prisma from "../prisma";

export default class ProductRepository {
    public async save(product: Product) {
        try {
            const newProduct = {
                id: product.getId(),
                name: product.getName(),
                categoria: product.getCategory(),
                manufacturer: product.getManufacturer(),
                amount: Number(product.getAmount()),
                updatedAt: product.getUpdateAt(),
                createdAt: product.getCreateAt(),
            };

            await prisma.produto.create({ data: newProduct });
        } catch (error) {
            console.log(error);
        }
    }

    public async findAll() {
        try {
            return await prisma.produto.findMany();
        } catch (error: any) {
            console.log(error);
        }
    }

    public async findAmountByCategory() {
        try {
            return prisma.produto.groupBy({
                by: ["categoria"],
                _sum: { amount: true },
                orderBy: { _sum: { amount: "asc" } },
            });
        } catch (error: any) {
            console.log(error);
        }
    }

    public async findById(id: string) {
        try {
            return prisma.produto.findUnique({ where: { id: id } });
        } catch (error) {
            console.log(error);
        }
    }
}
