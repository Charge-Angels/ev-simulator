import { PoolOptions } from 'poolifier';
import { Worker } from 'worker_threads';

export enum WorkerProcessType {
  WORKER_SET = 'workerSet',
  DYNAMIC_POOL = 'dynamicPool',
  STATIC_POOL = 'staticPool'
}

export interface WorkerOptions {
  startDelay?: number;
  poolMaxSize?: number;
  poolMinSize?: number;
  elementsPerWorker?: number;
  poolOptions?: PoolOptions<Worker>;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface WorkerData {}

export interface StationWorkerData extends WorkerData {
  index: number;
  templateFile: string;
}

export interface WorkerSetElement {
  worker: Worker,
  numberOfWorkerElements: number
}

export enum WorkerEvents {
  START_WORKER_ELEMENT = 'startWorkerElement',
}

