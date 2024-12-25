import { create } from "zustand";
import axios from "../lib/axios"; // Use the Axios instance
import { toast } from "react-hot-toast";
const eventStore=create((set, get) => ({
    event: [],
    upcommingEvents:[],
    loading: false,
    error: null,
    createEvent: async (formdata) => {
        set({ loading: true });
        try {
            const res = await axios.post(`/event/create`, formdata);
            set({ event: res.data });
            toast.success("Event created successfully");
        } catch (error) {
            set({ loading: false });
            toast.error(error || "An error occurred");
        }
    },
    
    getEvent:async()=>{
        try {
            const res = await axios.get(`/event/getevent`);
            set({ event: res.data });
        } catch (error) {
            set({ loading: false });
            toast.error(error || "An error occurred");
        }
    },
    upcommingevent:async()=>{
        try {
            const res = await axios.get(`/event/upcommingevent`);
            set({ upcommingEvents: res.data });
        } catch (error) {
            set({ loading: false });
            toast.error(error || "An error occurred");
        }
    },
    detailEvent:async(id)=>{
        try {
            const res = await axios.get(`/event/detail/${id}`);
            set({ event: res.data });
        } catch (error) {
            set({ loading: false });
            toast.error(error || "An error occurred");
        }
    }
}))

export default eventStore