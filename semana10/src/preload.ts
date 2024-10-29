import { contextBridge, ipcRenderer } from "electron";
import Vehicle from "./entity/Vehicle";

contextBridge.exposeInMainWorld("bankAPI", {
    createVehicle: async (Vehicle: Vehicle) => await ipcRenderer.invoke("create", Vehicle)
});
