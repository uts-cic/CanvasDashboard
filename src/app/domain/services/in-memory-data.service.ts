/**
 * A mock service which can be used to simulate http requests
 */
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { contents } from '../data/mock-content';

export class InMemoryDataService implements InMemoryDbService {

  /**
   * Create initial db when the app loads
   */
  createDb() {
    const socialActivity = sinAndCos();
    return { socialActivity, contents };
  }

}

/**
 * Generates and returns mock social activity data
 */
function sinAndCos() {
  const sin = [], cos = [], cos2 = [];
  const dates = [
    1025409600000,
    1028088000000,
    1030766400000,
    1033358400000,
    1036040400000,
    1038632400000,
    1041310800000,
    1043989200000,
    1046408400000,
    1049086800000,
    1051675200000,
    1054353600000,
    1056945600000,
    1059624000000,
    1062302400000,
    1064894400000,
    1067576400000,
    1070168400000,
    1072846800000,
    1075525200000
  ];

  for (let i = 0; i < dates.length; i++) {
    sin.push({x: dates[i], y: Math.round(Math.abs(Math.sin(i / 10) * 2) * 35)});
    cos.push({x: dates[i], y: Math.round(Math.abs(Math.cos(i / 10 + 2) + Math.random() / 10) * 50)});
    cos2.push({x: dates[i], y: Math.round(Math.abs(Math.cos(i / 10 + 2) + Math.random() / 10) * 30)});
  }

  return [
    {
      id: 1,
      values: sin,
      key: 'Facebook',
      color: '#3b5998'
    },
    {
      id: 2,
      values: cos,
      key: 'Twitter',
      color: '#1DA1F2'
    },
    {
      id: 3,
      values: cos2,
      key: 'Slack',
      color: '#DB4437'
    },
  ];
}
