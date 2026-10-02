---
title: "SATA for Segmentation"
order: 3
credits:
  - name: "Tanjeed Alam"
    url: "https://www.linkedin.com/in/tanjalam/"
pdf: "/public/sata-for-segmentation.pdf"
---

Applying spatial autocorrelation token analysis to improve robustness of segmentation models

### Features:
{: #sata-for-segmentation-features}

- SATA [Nikzad et al.] improves vision transformer robustness on classification tasks by grouping tokens based on spatial autocorrelation
- Compared five SATA variants, testing token-position restoration, cosine similarity versus attention scores, and exclusion of register tokens, finding an improvement on mIoU from 2.5% to 23.8%
- Built custom ADE20K-C robustness benchmark of 15,000 corrupted images across 15 corruption types and 5  severity levels to evaluate segmentation degradation under distribution shift
