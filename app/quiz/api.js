import config from '../config';

const load = () => (
  fetch(`${config.BASE_URL}api.php?amount=10&difficulty=hard&type=boolean`)
    .then((res) => res.json()) // TODO axios handles this automatically
    .then((data) => data)
    .catch((err) => err) // TODO use axois for better error handling
);

export {
  load,
};
