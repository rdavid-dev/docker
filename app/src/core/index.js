import * as API from "@/core/apis"

export default app => {
    app.provide("$api", API)
}