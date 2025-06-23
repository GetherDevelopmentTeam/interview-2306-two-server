import {Schema} from "mongoose"


const eventSchema = new Schema({
    title: {
        type: string,
        default: ""
    },
    date: {
        type: string,
        default: "",
    },
    time: {
        type: string,
        default: "",
    },
    description: {
        type: string,
        default: "",
    },
})