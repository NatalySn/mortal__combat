
export default class Api {
  baseUrl = 'https://reactmarathon-api.herokuapp.com/api/mk';
  allPlayers = `${this.baseUrl}/players`;
  randomPlayer = `${this.baseUrl}/player/choose`;
  fightPlayer = `${this.baseUrl}/player/fight`;
/**
 * 
 * @returns массив пользователей
 */
  getPlayers = async () => {
    return await fetch(this.allPlayers).then(res => res.json());
  }
/**
 * 
 * @returns массив компьютера
 */
  getRandomPlayer = async () => {
    return await fetch(this.randomPlayer).then(res => res.json());
  }
/**
 * 
 * @param {*} hit 
 * @param {*} defence 
 * @returns находим hit&defence и отправляем
 */
  getFight = async (hit, defence) => {
    return await fetch(this.fightPlayer, {
      method: 'POST',
      body: JSON.stringify({ hit, defence})
    }).then(res => res.json());
  }
}
