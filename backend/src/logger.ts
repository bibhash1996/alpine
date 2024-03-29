import winston from 'winston'
import expressWinston from 'express-winston'

const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4,
}

const level = () => {
    const env = process.env.NODE_ENV || 'development'
    const isDevelopment = env === 'development'

    // For now we will Debug log both in dev and prod.
    // return isDevelopment ? 'debug' : 'warn'
    return 'debug'
}

const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    debug: 'white',
}

winston.addColors(colors)

const applicationFormat = winston.format.combine(
    winston.format(info => {
        info.type = "APPLICATION";
        return info;
    })(),
    winston.format.json(),
    // winston.format.prettyPrint(),
)

const accessFormat = winston.format.combine(
    winston.format(info => {
        info.type = "ACCESS";
        return info;
    })(),
    winston.format.json(),
)

const transports = [
    new winston.transports.Console(),
]
expressWinston.responseWhitelist.push('body');

export const ExpressLogger = expressWinston.logger({
    transports: [
        new winston.transports.Console()
    ],
    format: accessFormat
})

export const ExpressErrorLogger = expressWinston.errorLogger({
    transports: [
        new winston.transports.Console()
    ],
    format: accessFormat
})

export default winston.createLogger({
    level: level(),
    levels,
    format: applicationFormat,
    transports,
})