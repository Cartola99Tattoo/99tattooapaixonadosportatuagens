
import React from "react";
import NaveMaeLayout from "@/components/layouts/NaveMaeLayout";
import AdminArtists from "@/pages/admin/AdminArtists";

const NaveMaeArtists = () => {
  return (
    <NaveMaeLayout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-black text-red-800 mb-2">Rede de Tatuadores</h1>
          <p className="text-gray-600">
            Gestão centralizada de todos os tatuadores da rede 99Tattoo
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-xl">
          <AdminArtists />
        </div>
      </div>
    </NaveMaeLayout>
  );
};

export default NaveMaeArtists;
