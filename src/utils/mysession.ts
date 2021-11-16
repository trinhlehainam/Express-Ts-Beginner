import {SessionData} from 'express-session'

// NOTE: use declaration merging
declare module 'express-session' {
    interface SessionData {
        userId?: string
    }
}
