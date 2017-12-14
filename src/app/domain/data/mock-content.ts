/**
 * Mock contents to save dashboard configurations
 */
import { Content } from '../models/content';

export const contents: Content[] = [
  // Instructor Content
  {
    id: 1,
    // Boolean values to determine whether the components are shown in the first row
    socialActivity: true,
    keywords: true,
    socialReach: false,
    engagement: false,
    network: false,
    twitterTopic: false,

    // Boolean values to determine whether the components are shown in the second row
    socialActivity2: false,
    keywords2: false,
    socialReach2: false,
    engagement2: false,
    network2: false,
    twitterTopic2: false,

    // Boolean values to determine whether the components are made available (Content Manager checkboxes)
    socialActivityCheck: true,
    keywordsCheck: true,
    socialReachCheck: true,
    engagementCheck: true,
    networkCheck: true,
    twitterTopicCheck: true,
  },
  // Student Content
  {
    id: 2,
    socialActivity: true,
    keywords: true,
    socialReach: false,
    engagement: false,
    network: false,
    twitterTopic: false,
    socialActivity2: false,
    keywords2: false,
    socialReach2: false,
    engagement2: false,
    network2: false,
    twitterTopic2: false,
    socialActivityCheck: true,
    keywordsCheck: true,
    socialReachCheck: true,
    engagementCheck: true,
    networkCheck: true,
    twitterTopicCheck: true,
  }
];
