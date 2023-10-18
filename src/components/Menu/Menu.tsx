import { useState } from "react";
import { Link } from "react-router-dom";
import Info from "../../assets/icons/info.svg?react";
import Gallery from "../../assets/icons/gallery.svg?react";
import Projects from "../../assets/icons/projects.svg?react";
import Profile from "../../assets/icons/profile.svg?react";

type Props = {};

enum Pages {
    info = "info",
    gallery = "gallery",
    projects = "",
    profile = "profile",
}

const Menu = ({}: Props) => {
    const [currentPage, setCurrentPage] = useState<string>("");
    return (
        <div className="z-10 font-normal fixed left-0 right-0 m-auto bottom-[4%] stroke-white text-white text-[14px] w-[90%] max-w-[410px] h-20 bg-[#292929] rounded-[20px] flex justify-evenly items-center">
            <Link
                onClick={() => setCurrentPage(Pages.info)}
                className={`${
                    currentPage === Pages.info
                        ? "stroke-[#AC6DCA] text-[#AC6DCA] transition"
                        : ""
                } flex flex-col gap-[4px] items-center`}
                to={Pages.info}
            >
                <Info className=" " />
                <p>INFO </p>
            </Link>
            <Link
                onClick={() => setCurrentPage(Pages.gallery)}
                className={`${
                    currentPage === Pages.gallery
                        ? "stroke-[#AC6DCA] text-[#AC6DCA] transition"
                        : ""
                } flex flex-col gap-[4px] items-center`}
                to={Pages.gallery}
            >
                <Gallery className=" " />
                <p>GALLERY</p>
            </Link>
            <Link
                onClick={() => setCurrentPage(Pages.projects)}
                className={`${
                    currentPage === Pages.projects
                        ? "stroke-[#AC6DCA] text-[#AC6DCA] transition"
                        : ""
                } flex flex-col gap-[4px] items-center`}
                to={Pages.projects}
            >
                <Projects className=" " />
                <p>PROJECTS</p>
            </Link>
            <Link
                onClick={() => setCurrentPage(Pages.profile)}
                className={`${
                    currentPage === Pages.profile
                        ? "stroke-[#AC6DCA] text-[#AC6DCA] transition"
                        : ""
                } flex flex-col gap-[4px] items-center`}
                to={Pages.profile}
            >
                <Profile className=" " />
                <p>PROFILE</p>
            </Link>
        </div>
    );
};

export default Menu;
