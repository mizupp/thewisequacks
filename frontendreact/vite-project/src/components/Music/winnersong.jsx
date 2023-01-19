import { Winner } from "./Sound"

function WinnerSong() {
    const audio = new Audio(Winner)
    audio.volume = 0.1
    audio.play()

//  const resp = audio.play();

// if (resp!== undefined) {
//     resp.then(_ => {
//         audio.play();
//     }).catch(error => {
//        console.log(error);
//     });
// }
}

export default WinnerSong;