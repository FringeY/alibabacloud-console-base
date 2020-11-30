import {
  ELoading
} from '../const';
import {
  IDataWithLoading
} from '../types';

export default function createDataWithLoading<T>(data: T, loading = ELoading.IDLE): IDataWithLoading<T> {
  return {
    loading,
    data
  };
}