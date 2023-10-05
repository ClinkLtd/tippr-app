import React from 'react';
import style from './counter.module.scss';

const Counter = props => {
  const { timer, handleClick } = props;
  const [timeCounter, setTimeCounter] = React.useState(timer);

  const returnMinutes = () => timeCounter / 60;
  const returnSeconds = () => timeCounter % 60;

  React.useEffect(() => {
    if (!timeCounter) return;

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setTimeCounter(timeCounter - 1);
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [timeCounter]);
  return (
    <button
      onClick={handleClick}
      disabled={!!timeCounter}
      className={style.button_wrapper}>
      Resend {!timeCounter ? 'OTP' : ''}
      {timeCounter ? (
        <span>
          in {" "}
          {returnMinutes() < 10 ? 0 : null}
          {Math.floor(returnMinutes())} : {returnSeconds() < 10 ? 0 : null}
          {returnSeconds()}
        </span>
      ) : null}
    </button>
  );
};

export default Counter;
