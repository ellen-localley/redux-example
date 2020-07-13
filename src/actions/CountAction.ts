import React from "react";

const CountActions = dispatcher => ({
    tick(currentCount) {
        dispatcher.handleAction({ type: 'TICK' })
    },
    reset(count) {
        dispatcher.handleAction({
            type: 'RESET',
            count
        })
    }
})