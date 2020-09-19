export type GamePlatform = 'XBOX' | 'PC' | 'PLAYSTATION';

export type Game = {
    id: number;
    title: string;
    plataform: GamePlatform;
    label: string;
    value: number;
}