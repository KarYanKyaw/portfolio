import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full text-center space-y-4 footer border-t py-[24px] bg-primary-foreground">
        <div className="flex justify-center gap-3 ">
          <div>
            <a target="_blank" href="https://github.com/KarYanKyaw">
              <img
                className="rounded-full hover:scale-95 cursor-pointer w-10 h-10"
                src="https://skillicons.dev/icons?i=github"
                alt=""
              />
            </a>
          </div>
          <div>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/kar-yan-kyaw-93a5362b3/"
            >
              <img
                className="rounded-full hover:scale-95 cursor-pointer w-10 h-10"
                src="https://skillicons.dev/icons?i=linkedin"
                alt=""
              />
            </a>
          </div>
        </div>
        <p className=" text-lg">
          © 2024 All Rights Reserved. Developed By Kar Yan Kyaw
        </p>
      </div>
    </>
  );
};

export default Footer;
