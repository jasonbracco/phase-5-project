import React, {useState} from "react"

function UserPhotoCard({photograph}){

    const [isEditing, setIsEditing] = useState(true)

    return(
        <div>
            {isEditing ? (
            <div>
                <img className="selling-pic" src={photograph.image} />
                <br></br>
                Name: {photograph.name}
                <br></br>
                Description: {photograph.description}
                <br></br>
                Price: ${photograph.price}
                <br></br>
                <br></br>
                <button onClick={() => setIsEditing(false)}>Edit</button>
                <button>Delete</button>
            </div>
            ) : (
                <div>
                    <img className="selling-pic" src={photograph.image} />
                    <br></br>
                    Editing baby
                    <br></br>
                    <button onClick={() => setIsEditing(true)}> Done Editing</button>
                </div>
            )}

        </div>
    )
}

export default UserPhotoCard