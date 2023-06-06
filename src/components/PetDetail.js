import React, { useEffect, useState } from "react";
import petsData from "../petsData";
import { useParams } from "react-router-dom";
import { updatePet, getPetByid, deletePet } from "../api/pets";
const PetDetail = () => {
  const { petId } = useParams();
  const [pet, setPet] = useState({});
  // const pet = petsData.find((pet) => pet.id == petId);

  const callApi = async () => {
    const res = await getPetByid(petId);
    setPet(res);
  };
  const handelUpdate = () => {
    updatePet(petId, pet.name, pet.image, pet.type, pet.adopted);
    // const handleDelete = (id) => {
    //   deletePet(id);
    // };
  };
  useEffect(() => {
    callApi();
  }, []);
  if (!pet) return <h1>pet is not found!</h1>;
  // if (!pet) {
  //   return <Navigate to="/" />;
  // }
  return (
    <div className="bg-[#F9E3BE] w-screen h-[100vh] flex justify-center items-center">
      <div className="border border-black rounded-md w-[70%] h-[70%] overflow-hidden flex flex-col md:flex-row p-5">
        <div className="h-full w-full md:w-[35%]">
          <img
            src={pet.image}
            alt={pet.name}
            className="object-contain w-full h-full"
          />
        </div>
        <div className="w-full md:w-[65%] h-full pt-[30px] flex flex-col p-3">
          <h1>Name: {pet.name}</h1>
          <h1>Type: {pet.type}</h1>
          <h1>adopted: {pet.adopted}</h1>

          <button
            onClick={handelUpdate}
            className="w-[70px] border border-black rounded-md  hover:bg-green-400 mb-5"
          >
            Adobt
          </button>

          <button
            // onClick={handleDelete}
            className="w-[70px] border border-black rounded-md  hover:bg-red-400"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetDetail;
