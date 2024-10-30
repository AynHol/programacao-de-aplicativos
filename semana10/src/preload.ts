import { contextBridge, ipcRenderer } from "electron";
import Vehiclee from "./entity/Vehicle";

contextBridge.exposeInMainWorld("bankAPI", {
    createVehicle: async (Vehicle: Vehiclee) =>
        await ipcRenderer.invoke("create", Vehicle),
    findAll: async () => await ipcRenderer.invoke("findAll"),
    findById: async (id: string) => await ipcRenderer.invoke("findById", id),
});
