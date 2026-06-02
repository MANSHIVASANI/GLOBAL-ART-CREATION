/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface SignatureCategory {
  id: string;
  num: string;
  title: string;
  description: string;
  year: string;
  image: string;
  location: string;
}

export interface ServiceDetail {
  num: string;
  title: string;
  description: string;
  tags?: string[];
  image?: string;
  pdf?: string;
}

export interface ArchiveItem {
  id: string;
  title: string;
  series: string;
  image: string;
  description: string;
  materials: string[];
  dimensions: string;
  specSection?: string;
}

export interface InquiryFormState {
  fullName: string;
  email: string;
  serviceCategory: string;
  specifications: string;
}
