import React from "react";
import classes from "./Banner.module.css";

function Banner() {
  return (
    <div className={classes.banner}>
      <div className={classes.conteudo}>
        <h1 className={classes.titulo}>
          ADVOGADA ESPECIALIZADA EM CASOS CRIMINAIS
        </h1>
        <div>
          <a
            href="https://api.whatsapp.com/send?phone=5547999230603&text=Vim pelo site."
            target="_blank"
            className={classes.contato}
          >
            Fale agora com uma especialista
          </a>
          <a
            className={classes.botao}
            href="https://api.whatsapp.com/send?phone=5547999230603&text=Vim pelo site."
            target="_blank"
          >
            <svg
              width="55"
              height="55"
              viewBox="0 0 512 512"
              fill="none"
              className={classes.svg}
            >
              <rect x="68" y="87" width="372" height="327" fill="white" />
              <path
                d="M256 0C114.637 0 0 114.637 0 256C0 397.363 114.637 512 256 512C397.363 512 512 397.363 512 256C512 114.637 397.363 0 256 0ZM261.426 405.051C261.422 405.051 261.43 405.051 261.426 405.051H261.363C235.719 405.039 210.52 398.609 188.141 386.406L106.918 407.707L128.656 328.332C115.246 305.105 108.191 278.754 108.203 251.758C108.238 167.305 176.973 98.5977 261.426 98.5977C302.41 98.6133 340.883 114.566 369.809 143.516C398.738 172.469 414.66 210.953 414.645 251.879C414.609 336.336 345.867 405.051 261.426 405.051V405.051Z"
                fill="#25D366"
              />
              <path
                d="M261.477 124.469C191.23 124.469 134.102 181.574 134.07 251.77C134.063 275.824 140.797 299.25 153.543 319.52L156.57 324.336L143.703 371.316L191.902 358.676L196.555 361.434C216.105 373.035 238.52 379.172 261.371 379.18H261.422C331.613 379.18 388.742 322.07 388.773 251.871C388.785 217.852 375.551 185.867 351.508 161.805C327.465 137.742 295.488 124.48 261.477 124.469V124.469ZM336.383 306.504C333.191 315.441 317.898 323.602 310.543 324.703C303.945 325.688 295.602 326.098 286.43 323.188C280.867 321.422 273.738 319.066 264.602 315.125C226.199 298.547 201.117 259.891 199.203 257.336C197.289 254.781 183.57 236.582 183.57 217.742C183.57 198.906 193.461 189.645 196.969 185.816C200.48 181.984 204.629 181.027 207.18 181.027C209.73 181.027 212.285 181.051 214.516 181.16C216.867 181.277 220.023 180.266 223.129 187.73C226.32 195.395 233.977 214.23 234.934 216.145C235.891 218.063 236.527 220.297 235.254 222.852C233.977 225.406 229.734 230.918 225.684 235.941C223.984 238.047 221.77 239.922 224.004 243.754C226.234 247.582 233.922 260.117 245.301 270.266C259.926 283.305 272.262 287.344 276.09 289.262C279.914 291.176 282.148 290.855 284.383 288.305C286.613 285.75 293.953 277.129 296.504 273.297C299.055 269.465 301.609 270.105 305.117 271.383C308.629 272.656 327.449 281.918 331.277 283.832C335.105 285.75 337.656 286.707 338.613 288.305C339.574 289.902 339.574 297.562 336.383 306.504V306.504Z"
                fill="#25D366"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
