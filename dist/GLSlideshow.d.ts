import { ImageSource, Images, GLSlideshowOptions } from './types';
import { EventDispatcher } from './EventDispatcher';
import { Uniforms } from './shaderLib';
export declare class GLSlideshow extends EventDispatcher {
    static addShader(effectName: string, source: string, uniforms: Uniforms): void;
    duration: number;
    interval: number;
    private _currentIndex;
    private _startTime;
    private _elapsedTime;
    private _pauseStartTime;
    private _transitionStartTime;
    private _progress;
    private _isRunning;
    private _inTransition;
    private _hasUpdated;
    private _domElement;
    private _images;
    private _from;
    private _to;
    private _resolution;
    private _imageAspect;
    private _destroyed;
    private _vertexes;
    private _gl;
    private _vertexShader;
    private _fragmentShader;
    private _program;
    private _vertexBuffer;
    private _uvBuffer;
    private _uniformLocations;
    constructor(images: Images, options?: GLSlideshowOptions);
    readonly domElement: HTMLCanvasElement;
    readonly currentIndex: number;
    readonly nextIndex: number;
    readonly prevIndex: number;
    readonly length: number;
    readonly inTransition: boolean;
    to(to: number): void;
    play(): this;
    pause(): this;
    insert(image: ImageSource, order: number): void;
    remove(order: number): void;
    replace(images: Images): void;
    setEffect(effectName: string): void;
    setSize(w: number, h: number): void;
    render(): void;
    destory(): void;
    private _setUniform;
    private _updateTexture;
}
