export class RedisDriverChannel {
    public static channel = 'driver' as const;

    public static command = {
        start: 'start' as const,
        pause: 'pause' as const,
        continue: 'continue' as const,
        exit: 'exit' as const,
    };
}
