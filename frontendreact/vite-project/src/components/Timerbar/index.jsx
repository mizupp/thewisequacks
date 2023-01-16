import ProgressTimer from 'react-progress-bar-timer';
//https://socket.dev/npm/package/react-progress-bar-timer#demo

const Timerbar = () => {
const ExampleComponent = () => (
//   <ProgressTimer started label="Something" duration={3} onFinish={finished()} />
<ProgressTimer label="Something" duration={3} onFinish={finished} />

);

const finished = () => {
    console.log("done");
}
  

return (
    <>

    
    <br />
    <p> Here is the progress bar </p>
    <ExampleComponent />
    </>
);
}

export default Timerbar;