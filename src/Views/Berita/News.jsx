import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../../Components/Header";

const News = () => {
  return (
    <div id="news" className="w-full h-auto">
      <Header />
      <header className="w-full dark:bg-gray-700 flex justify-between bg-slate-50 shadow-sm h-auto transition-all duration-500">
        <NavLink
          to="/news/"
          className={(nav) =>
            nav.isActive
              ? "transition-all duration-500 w-full text-center dark:text-slate-300 text-sm p-1 py-2 text-gray-800 border-b-2 border-indigo-500"
              : "transition-all duration-500 w-full text-center dark:text-slate-300 text-sm p-1 py-2 text-gray-800"
          }
        >
          All
        </NavLink>
        <NavLink
          to="/news/bisnis/"
          className={(nav) =>
            nav.isActive
              ? "transition-all duration-500 w-full text-center dark:text-slate-300 text-sm p-1 py-2 text-gray-800 border-b-2 border-indigo-500"
              : "transition-all duration-500 w-full text-center dark:text-slate-300 text-sm p-1 py-2 text-gray-800"
          }
        >
          Bisnis
        </NavLink>
        <NavLink
          to="/news/gaming/"
          className={(nav) =>
            nav.isActive
              ? "transition-all duration-500 w-full text-center dark:text-slate-300 text-sm p-1 py-2 text-gray-800 border-b-2 border-indigo-500"
              : "transition-all duration-500 w-full text-center dark:text-slate-300 text-sm p-1 py-2 text-gray-800"
          }
        >
          Game
        </NavLink>
        <NavLink
          to="/news/tips/"
          className={(nav) =>
            nav.isActive
              ? "transition-all duration-500 w-full text-center dark:text-slate-300 text-sm p-1 py-2 text-gray-800 border-b-2 border-indigo-500"
              : "transition-all duration-500 w-full text-center dark:text-slate-300 text-sm p-1 py-2 text-gray-800"
          }
        >
          Tutorial
        </NavLink>
      </header>
      <section className="px-2 py-1 w-full bg-transparent">
        <div className="bg-white flex border-b-2 border-gray-200 items-center dark:bg-transparent dark:border-gray-900 transition-all duration-500">
          <div className="w-32 h-32 p-3">
            <img
              src="https://space-kd.sgp1.digitaloceanspaces.com/anekaukm/blogs/f3f82138-574f-4cdb-9b99-d4ca296ca9a9.jpeg-thumb"
              alt=""
              className="w-full h-full rounded-lg object-cover"
            />
          </div>
          <div className="py-3 w-full flex-1 px-2">
            <span className="bg-rose-500 py-[3px] px-7 text-[12px] rounded-xl text-white text-center">
              Bisnis
            </span>
            <br />
            <label className="font-bold dark:text-white transition-all duration-500">
              Proses Pembuatan Tahu Dari Awal Hingga Siap Dipasarkan.
            </label>
            <span className="flex justify-between pr-3 mt-2">
              <p className="text-sm text-gray-700 dark:text-slate-300 transition-all duration-500">
                @mochammadhb
              </p>
              <p className="text-sm text-gray-700 dark:text-slate-300 transition-all duration-500">
                22-07-2022
              </p>
            </span>
          </div>
        </div>
        <div className="bg-white flex border-b-2 border-gray-200  items-center dark:bg-transparent dark:border-gray-900 transition-all duration-500">
          <div className="w-32 h-32 p-3">
            <img
              src="https://space-kd.sgp1.digitaloceanspaces.com/anekaukm/blogs/f0ee7efd-50fa-4dee-aa81-ac1b4b006345.jpeg-thumb"
              alt=""
              className="w-full h-full rounded-lg object-cover"
            />
          </div>
          <div className="py-3 w-full flex-1 px-2">
            <span className="bg-green-500 py-[3px] px-7 text-[12px] rounded-xl text-white text-center">
              Tutorial
            </span>
            <br />
            <label className="font-bold dark:text-white transition-all duration-500">
              Cara Efektif Mengelola Modal Usaha, Pemula Wajib Baca!
            </label>
            <span className="flex justify-between pr-3 mt-2">
              <p className="text-sm text-gray-700 dark:text-slate-300 transition-all duration-500">
                @mochammadhb
              </p>
              <p className="text-sm text-gray-700 dark:text-slate-300 transition-all duration-500">
                22-07-2022
              </p>
            </span>
          </div>
        </div>
        <div className="bg-white flex border-b-2 border-gray-200 items-center dark:bg-transparent dark:border-gray-900 transition-all duration-500">
          <div className="w-32 h-32 p-3">
            <img
              src="https://space-kd.sgp1.digitaloceanspaces.com/anekaukm/blogs/cc470e2c-a9ec-45f0-a791-b6b95da94de0.jpeg-thumb"
              alt=""
              className="w-full h-full rounded-lg object-cover"
            />
          </div>
          <div className="py-3 w-full flex-1 px-2">
            <span className="bg-rose-500 py-[3px] px-7 text-[12px] rounded-xl text-white text-center">
              Bisnis
            </span>
            <br />
            <label className="font-bold dark:text-white transition-all duration-500">
              Potensi Besar dan Keuntungan Membudidayakan Bebek Alabio.
            </label>
            <span className="flex justify-between pr-3 mt-2">
              <p className="text-sm text-gray-700 dark:text-slate-300 transition-all duration-500">
                @mochammadhb
              </p>
              <p className="text-sm text-gray-700 dark:text-slate-300 transition-all duration-500">
                22-07-2022
              </p>
            </span>
          </div>
        </div>
        <div className="bg-white flex border-b-2 border-gray-200 items-center dark:bg-transparent dark:border-gray-900 transition-all duration-500">
          <div className="w-32 h-32 p-3">
            <img
              src="https://cdn1-production-images-kly.akamaized.net/QQEFDpNTWLyLLaVX3uLHQQF5vHM=/200x112/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3384680/original/064260600_1614067322-MPL_Season_7.JPG"
              alt=""
              className="w-full h-full rounded-lg object-cover"
            />
          </div>
          <div className="py-3 w-full flex-1 px-2">
            <span className="bg-blue-500 py-[3px] px-7 text-[12px] rounded-xl text-white text-center">
              Game
            </span>
            <br />
            <label className="font-bold dark:text-white transition-all duration-500">
              Selamat! Tekuk Bigetron Alpha, EVOS Legends Juara MPL Season 7
            </label>
            <span className="flex justify-between pr-3 mt-2">
              <p className="text-sm text-gray-700 dark:text-slate-300 transition-all duration-500">
                @mochammadhb
              </p>
              <p className="text-sm text-gray-700 dark:text-slate-300 transition-all duration-500">
                22-07-2022
              </p>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
