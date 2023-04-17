import React, { useState } from "react";

const AddMovies = ({ addmovies }) => {
  const [name, setName] = useState("");
  const [Categorie, setCategorie] = useState("");
  const [pays, setPays] = useState("");
  const [rate, setRate] = useState("");
  const [photo, setPhoto] = useState("");
  const [trailer, setTrailer] = useState("");
  const [desc, setDesc] = useState("");
  return (
    <div>
      <form>
        <div>
          <label>Name</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div>
          <label>Category</label>
          <input
            type="text"
            onChange={(e) => setCategorie(e.target.value)}
            value={Categorie}
          />
        </div>
        <div>
          <label>Country</label>
          <input
            type="text"
            onChange={(e) => setPays(e.target.value)}
            value={pays}
          />
        </div>
        <div>
          <label>Rate</label>
          <input
            type="text"
            onChange={(e) => setRate(e.target.value)}
            value={rate}
          />
        </div>
        <div>
          <label>Photo</label>
          <input
            type="text"
            onChange={(e) => setPhoto(e.target.value)}
            value={photo}
          />
        </div>
        <div>
          <label>trailer</label>
          <input
            type="text"
            onChange={(e) => setTrailer(e.target.value)}
            value={trailer}
          />
        </div>
        <div>
          <label>desc</label>
          <input
            type="text"
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
          />
        </div>
        <button
          className="btn btn-success"
          onClick={(e) => {
            e.preventDefault();
            addmovies({ name, pays, photo, rate, Categorie, trailer, desc });
            setCategorie("");
            setDesc("");
            setPays("");
            setPhoto("");
            setTrailer("");
            setRate("");
            setName("");
          }}
        >
          AddMovies
        </button>
      </form>
    </div>
  );
};

export default AddMovies;
