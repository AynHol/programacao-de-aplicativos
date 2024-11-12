import { contextBridge, ipcRenderer } from "electron";
import Vehiclee from "./entity/Vehicle";
import User from "./entity/User";

contextBridge.exposeInMainWorld("bankAPI", {
    createVehicle: async (Vehicle: Vehiclee) =>
        await ipcRenderer.invoke("create", Vehicle),
    findAll: async () => await ipcRenderer.invoke("findAll"),
    findById: async (id: string) => await ipcRenderer.invoke("findById", id),
    vehicleDelete: async (id: string) => await ipcRenderer.invoke("vehicleDelete", id),
    createUser: async (user: User) => await ipcRenderer.invoke("createUser", user),
    findByEmail: async (email: string) => await ipcRenderer.invoke("FindByEmail", email),
});

contextBridge.exposeInMainWorld("navigateAPI", {
    detailsPage: (id: string) => ipcRenderer.send("changePage", id),
    homePage: () => ipcRenderer.send("changePageHome"),
});
