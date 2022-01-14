import { usersAlreadyRegistered } from "./data/usersNames";

const MIN_LENGTH = 4;
const MAX_LENGTH = 32;

const lengthRule = (name) => {
  if (name.length > MAX_LENGTH || name.length < MIN_LENGTH) throw new Error("Invalid name length");
};

const oneOfEachWithLettersFirstAndNoUnderscoreLastRule = (name) => {
  if (!/^[a-zA-Z]+\d*_+[a-zA-Z]*_*\d+[a-zA-Z]*$/.test(name))
    throw new Error(
      "Need to contain one of each of the following characters: letter, number, underscore"
    );
};

const uniqueRule = (name) => {
  if (usersAlreadyRegistered.includes(name)) throw new Error("Name already registered");
};
export function validateUserName(name) {
  try {
    lengthRule(name);
    oneOfEachWithLettersFirstAndNoUnderscoreLastRule(name);
    uniqueRule(name);
    return true;
  } catch (e) {
    return false;
  }
}
