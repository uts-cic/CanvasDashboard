/**
 * Model for Content for storing dashboard configurations
 */
export class Content {
  id: number;
  // Boolean values to determine whether the components are shown in the first row
  socialActivity: boolean;
  keywords: boolean;
  socialReach: boolean;
  engagement: boolean;
  network: boolean;
  twitterTopic: boolean;

  // Boolean values to determine whether the components are shown in the second row
  socialActivity2: boolean;
  keywords2: boolean;
  socialReach2: boolean;
  engagement2: boolean;
  network2: boolean;
  twitterTopic2: boolean;

  // Boolean values to determine whether the components are made available (Content Manager checkboxes)
  socialActivityCheck: boolean;
  keywordsCheck: boolean;
  socialReachCheck: boolean;
  engagementCheck: boolean;
  networkCheck: boolean;
  twitterTopicCheck: boolean;
}
