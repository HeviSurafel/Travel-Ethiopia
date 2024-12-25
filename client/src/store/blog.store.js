import { create } from "zustand";
import axios from "../lib/axios"; // Use the Axios instance
import { toast } from "react-hot-toast";

const useBlogStore = create((set, get) => ({
    blog: [],
    comment:[],
    numberOfLikes:null,
    loading: false,
    error: null,
    setBlog: (blog) => set({ blog }),
    getAllBlogs: async () => {
        try {
            const res = await axios.get("/blog/getblogs");
            set({ blog: res.data });
        } catch (error) {
            set({ error: error.message });
        }    
    },        
    createBlog: async (formdata,id) => {
        set({ loading: true });
        try {
            const res = await axios.post("/blog/create", {title: formdata.title,subdescription:formdata.subdescription,image:formdata.image, description:formdata.description,user:id});
            set({ blog: res.data, loading: false });
        } catch (error) {
            set({ loading: false });
            toast.error(error || "An error occurred");
        }
    },    
    deleteBlog: async (id) => {    
        try {
            const res = await axios.delete(`/blog/${id}`);
            set({ blog: res.data });
        } catch (error) {
            set({ error: error.message });
        }
    },        
    updateBlog: async ({ id, title, subdescription, image, description }) => {
        set({ loading: true });
        try {
            const res = await axios.put(`/blog/${id}`, { title, subdescription, image, description });
            set({ blog: res.data, loading: false });
        } catch (error) {
            set({ loading: false });
            toast.error(error || "An error occurred");
        }
    },    
    getSingleBlog: async (id) => {
        try {
            const res = await axios.get(`/blog/detail/${id}`);
            set({ blog: res.data });
        } catch (error) {
            set({ error: error.message });
        }
    },
    likeBlog:async(userId,blogId)=>{
        try {
            const res = await axios.post(`/blog/like/:${blogId}`,{userId,blogId,itemType:"blog"});
            set({ numberOfLikes: res.data });
        } catch (error) {
            set({ error: error.message });
        }
    },
    createComment:async(content,blogId,userId)=>{
    try {
        console.log(userId)
        const res = await axios.post(`/blog/detail/create/comment/:${blogId}`, {
          content,
          user: userId,
          blog:blogId,
        });
        console.log("Comment created successfully:", res.data);
       set({comment:res.data});
      } catch (error) {
        console.error("Error creating comment:", error.response || error);
        throw error; // Propagate the error
      }
    },
    getComment:async(id)=>{
        try {
            console.log(id)
            const res=await axios.get(`/blog/detail/comment/${id}`);
            set({comment:res.data});
        } catch (error) {
            set({ error: error.message });
        }
    }    
    
}));

export default useBlogStore;