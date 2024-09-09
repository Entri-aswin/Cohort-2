import { useState } from "react";
import { axiosInstance } from "../../config/axiosInstance";

export function CreateCourse() {
    const [image, setImage] = useState({ preview: "", data: "" });
    const [data, setData] = useState({ title: "", description: "", duration: "", price: 0 });
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("image", image.data);

        // for (key in data) {
        //     key: data[key];
        //     formData(key, data[key]);
        // }

        formData.append("title", data.title);
        formData.append("description", data.description);
        formData.append("duration", data.duration);
        formData.append("price", data.price);

        const response = await axiosInstance({
            url: "/course/create",
            method: "POST",
            data: formData,
        });

        if (response) setStatus(response.statusText);
    };
    console.log(image, "=====image");

    const handleFileChange = (e) => {
        const img = {
            preview: URL.createObjectURL(e.target.files[0]),
            data: e.target.files[0],
        };
        setImage(img);
    };

    console.log(data, "------data");

    const handleInput = (event) => {
        setData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    };

    return (
        <div className="">
            <h1>Upload to server</h1>
            {image.preview && <img src={image.preview} width="100" height="100" />}
            <hr></hr>
            <form onSubmit={handleSubmit}>
                <input type="file" name="file" onChange={handleFileChange}></input>
                <input type="text" name="title" placeholder="title" onChange={handleInput} />
                <input type="text" name="description" placeholder="description" onChange={handleInput} />
                <input type="text" name="duration" placeholder="duration" onChange={handleInput} />
                <input type="number" name="price" placeholder="price" onChange={handleInput} />
                <button type="submit">Submit</button>
            </form>
            {status && <h4>{status}</h4>}
        </div>
    );
}
