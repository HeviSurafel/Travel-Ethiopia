import { create } from "zustand";
import axios from "../lib/axios"; // Use the Axios instance
import { toast } from "react-hot-toast";

const usePackageStore = create((set, get) => ({
    package: [],
    loading: false,
    error: null,
    allPackages: async () => {
        set({ loading: true });
        try {
            const res = await axios.get("/package/getpackages");
            set({ package: res.data, loading: false });

        } catch (error) {
            set({ loading: false });
            toast.error(error || "An error occurred");
        }
    },
    createPackage: async (data) => {
        set({ loading: true });
        try {
            const res = await axios.post("/package/createpackage", data);
            set({ package: res.data, loading: false });
            toast.success("Package created successfully");
        } catch (error) {
            set({ loading: false });
            toast.error(error || "An error occurred");
        }
    },

}));
export default usePackageStore