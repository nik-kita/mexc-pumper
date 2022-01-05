export const PAUSE_EXIT_SELECT = {
    type: 'select' as const,
    name: 'pauseOrExit' as const,
    message: 'Feel free to pick pause or exit at any time:',
    choices: [
        { title: 'Pause', value: 'pause' as const },
        { title: 'Exit', description: 'Will exit programm', value: 'exit' as const },
    ],
    initial: 0,
};

export const CONTINUE_EXIT_SELECT = {
    type: 'select' as const,
    name: 'continueOrExit' as const,
    message: 'You may continue logging at any time',
    choices: [
        { title: 'Continue', value: 'continue' as const },
        { title: 'Exit', dexcription: 'Will exit programm', value: 'exit' as const },
    ],
};

export const START_EXIT_SELECT = {
    type: 'select' as const,
    name: 'startOrExit' as const,
    message: 'Start?',
    choices: [
        { title: 'Yes', value: 'start' as const },
        { title: 'Exit', dexcription: 'Will exit programm', value: 'exit' as const },
    ],
};
