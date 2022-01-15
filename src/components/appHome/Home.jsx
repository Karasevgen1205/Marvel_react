import { useEffect, useState } from "react";
import { Transition } from "react-transition-group";
// import MarvelService from "../../services/MarvelService";
import cv from "../../resources/img/CV-2021.svg";
import "./home.scss";

const Home = (props) => {
  // const [data, setData] = useState(null);
  // const [current, setCurrent] = useState("Введите сумму и выберете валюту");
  // const marvelService = new MarvelService();
  // let curs = null;

  // useEffect(() => {
  //   marvelService
  //     .getResource("https://www.nbrb.by/api/exrates/rates?periodicity=0")
  //     .then((res) => {
  //       setData(res);
  //     });
  // }, []);

  // const onChange = (a, b) => {
  //   let c = (current / b) * a;
  //   setCurrent(c);
  // };

  // if (data) {
  //   console.log(data);
  //   curs = data.map((item, i) => {
  //     return (
  //       <tr className="block" key={i}>
  //         <td>
  //           <button
  //             onClick={() => onChange(item.Cur_OfficialRate, item.Cur_Scale)}
  //           >
  //             {item.Cur_Abbreviation}
  //           </button>
  //         </td>
  //         <td>{item.Cur_ID}</td>
  //         <td>{item.Cur_Name}</td>
  //         <td>{item.Cur_OfficialRate}</td>
  //         <td>{item.Cur_Scale}</td>
  //       </tr>
  //     );
  //   });
  // }

  const duration = 2;

  const defaultStyle = {
    transition: `all ${duration}s ease-in-out`,
    opacity: 0,
    visibility: "hidden",
  };

  const transitionStyles = {
    entering: { opacity: 1, visibility: "visible" },
    entered: { opacity: 1, visibility: "visible" },
    exiting: { opacity: 0, visibility: "hidden" },
    exited: { opacity: 0, visibility: "hidden" },
  };

  return (
    <Transition in={props.run} unmountOnExit>
      {(state) => (
        <div
          className="home"
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          <div className="container">
            {/* <div className="">
          <h1 className="home__animate">Hello</h1>
          <marquee behavior="" direction="">
            Hello Bro!!! Hello Bro!!! Hello Bro!!! Hello Bro!!!
          </marquee>
          <input
            type="number"
            placeholder="Введите сумму"
            onChange={(e) => {
              setCurrent(e.target.value);
            }}
          />
          <span>{current}</span>
          <table className="home__table">
            <tbody>{curs}</tbody>
          </table>
        </div> */}
            <div className="home__img">
              <img src={cv} alt="" />
            </div>
          </div>
        </div>
      )}
    </Transition>
  );
};

export default Home;
