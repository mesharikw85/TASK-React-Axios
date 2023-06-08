import React, { useState, useEffect } from "react";
import petsData from "../petsData";
import PetItem from "./PetItem";
import Modal from "./Modal";
import { getpets } from "../api/pets";
import { useQuery } from "@tanstack/react-query";

const PetList = () => {
  const [query, setQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [pets, setPets] = useState([]);
  // // const pets = getpets;

  // const getpet = async () => {
  //   const res = await getpets();
  //   setPets(res.data);
  // };
  // useEffect(() => {
  //   getpet();
  // }, []);

  const { data, isLoading } = useQuery({
    queryKey: ["pets"],
    queryFn: () => getpets(),
  });
  console.log(data);

  const petList = data?.data?.map((pet) => <h1 Key={pet.id}>{pet.name} </h1>);
  if (isLoading) return <h1>Laoding...</h1>;
  return <div>{petList}</div>;

  // const petList = pets
  //   .filter((pet) => pet.name.toLowerCase().includes(query.toLowerCase()))
  //   .map((pet) => <PetItem pet={pet} key={pet.id} />);

  return (
    <>
      <div className="bg-[#F9E3BE] flex flex-col justify-center items-center ">
        <div className="w-[76vw] flex h-[30px] mb-[30px] mt-[30px]">
          <input
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            placeholder="Search"
            className="w-[70%] flex justify-start items-center border border-black rounded-md"
          />
          <button
            className="ml-auto w-[25%] px-3 py-2 rounded-md text-sm md:text-xl border border-black  flex justify-center items-center bg-green-400 hover:bg-green-600"
            onClick={() => {
              setShowModal(true);
            }}
          >
            Add pet
          </button>
        </div>
        <div className=" flex flex-col flex-wrap md:flex-row gap-[20px] w-[76vw]  justify-center items-center mb-[50px]">
          {/* {petList} */}
        </div>
      </div>
      <Modal show={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default PetList;
