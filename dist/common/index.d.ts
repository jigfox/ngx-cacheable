import { ICacheBusterConfig } from './ICacheBusterConfig';
import { ICacheConfig } from './ICacheConfig';
import { ICachePair } from './ICachePair';
import { IStorageStrategy } from './IStorageStrategy';
import { IAsyncStorageStrategy } from './IAsyncStorageStrategy';
export declare const DEFAULT_CACHE_RESOLVER: (oldParams: any, newParams: any) => boolean;
export declare const DEFAULT_HASHER: (parameters: any[]) => any[];
export declare type ICacheResolver = (oldParameters: any, newParameters: any) => boolean;
export declare type ICacheHasher = (parameters: Array<any>) => any;
export declare type IShouldCacheDecider = (response: any) => boolean;
export declare type ICacheable<T> = (...args: Array<any>) => T;
export { ICacheBusterConfig, ICacheConfig, ICachePair };
export declare const GlobalCacheConfig: {
    cacheResolver?: ICacheResolver;
    cacheHasher?: ICacheHasher;
    storageStrategy: new () => IStorageStrategy | IAsyncStorageStrategy;
    globalCacheKey: string;
    promiseImplementation: (() => PromiseConstructorLike) | PromiseConstructorLike;
};
export { IStorageStrategy };
