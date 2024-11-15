const logLevels = {
  debug: 4,
  info: 3,
  warn: 2,
  error: 1,
};

const currentLogLevel =
import.meta.env.VITE_NODE_ENV === "development" ? logLevels.debug : logLevels.warn;

function log(level, ...args) {
  if (logLevels[level] <= currentLogLevel) {
    console[level](...args);
  }
}

export const Logger = {
  debug: (...args) => log("debug", ...args),
  info: (...args) => log("info", ...args),
  warn: (...args) => log("warn", ...args),
  error: (...args) => log("error", ...args),
};
