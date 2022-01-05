/* eslint-disable no-await-in-loop */
import prompts from 'prompts';

const PAUSE_INPUT = {
    type: 'select' as const,
    name: 'pause' as const,
    message: 'Feel free to pick pause or exit at any time:',
    choices: [
        { title: 'Pause', value: 'pause' as const },
        { title: 'Exit', description: 'Will exit programm', value: 'exit' as const },
    ],
    initial: 0,
};

const CONTINUE_INPUT = {
    type: 'select' as const,
    name: 'continue' as const,
    message: 'You may continue logging at any time',
    choices: [
        { title: 'Continue', value: 'continue' as const },
        { title: 'Exit', dexcription: 'Will exit programm', value: 'exit' as const },
    ],
};

const START_INPUT = {
    type: 'select' as const,
    name: 'start' as const,
    message: 'Start?',
    choices: [
        { title: 'Yes', value: 'start' as const },
        { title: 'Exit', dexcription: 'Will exit programm', value: 'exit' as const },
    ],
};

(async () => {
    const { start } = await prompts(START_INPUT);

    if (start === 'exit') return;

    const exitNow = false;

    while (!exitNow) {
        const { pause } = await prompts(PAUSE_INPUT);

        if (pause === 'exit') return;

        const { continue: continues } = await prompts(CONTINUE_INPUT);

        if (continues === 'exit') return;
    }
})();
