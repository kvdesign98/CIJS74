import React from "react";

export default function MangaContainer({ image, name, viewCount, commentCount, lastestChapter, dateModified }) {

    return (
        <div className="MangaContainer">
            <div>
                <div className="topMain">

                    <img className="image" src={image} alt="Ảnh" /><br />
                    <span className="top">
                        <span className="viewCount"> {viewCount} <img className="icon" src="https://t3.ftcdn.net/jpg/02/59/95/90/240_F_259959012_EDZRUTQ4QcIdnzoMjVdOfyehHXhVTN4Y.jpg" alt="Ảnh" /></span>
                        <span className="commentCount"> {commentCount} <img className="icon" src="https://t4.ftcdn.net/jpg/03/92/78/49/240_F_392784933_tvl9KbWLHoFxoKr9kQoLRW8D1e357pnr.jpg" alt="Ảnh" /></span>
                    </span>
                </div>

                <h2 className="name">{name}</h2>

                <div className="lastestChapter">Chapter : {lastestChapter}</div>

                <div className="dateModified">{dateModified}</div><br /><br />
            </div>
        </div>
    )
}