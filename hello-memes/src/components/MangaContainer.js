import React from "react";

export default function MangaContainer({ image, name, viewCount, commentCount, lastestChapter, dateModified }) {

    return (
        <div className="MangaContainer">

            <div className="top">

                <img className="image" src={image} alt="Ảnh" /><br />
                <span className="viewCount"> {viewCount}</span>
                <span className="commentCount"> {commentCount}</span>
                
            </div>

            <h2 className="name">{name}</h2>

            <div className="lastestChapter">Chapter : {lastestChapter}</div>

            <div className="dateModified">{dateModified}</div><br /><br />
        </div>
    )
}