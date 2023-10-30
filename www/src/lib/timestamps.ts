export function toTimestamp(hour: number, minute: number, second: number) : number {
    return 3600 * hour + 60 * minute + second;
}

export function fromTimestamp(timestamp: number) {
    const hour = Math.floor(timestamp / 3600);
    const minute = Math.floor((timestamp % 3600) / 60);
    const second = timestamp % 60;
    return {
        hour: hour,
        minute: minute,
        second: second
    };
}