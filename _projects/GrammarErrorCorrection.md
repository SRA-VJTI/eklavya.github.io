---
layout: page
title: T5 Grammarator

description: Fine-tune a T5 transformer to fix grammar mistakes and serve it through a FastAPI endpoint.  
---

---

| Project Domains                                              |Mentors| Project Difficulty |
|------------------------------------------------------------|--|--------------------|
| NLP, Deep Learning, Transformers, Model Deployment, Pre-proc|Rakshita, Prithvi| Hard               |

---

### Project Description

Turn a pre-trained **T5** model into a grammar-fixing engine:  
* Clean and pair error-annotated sentences from FCE or Lang-8.  
* Fine-tune T5 with Hugging Face Transformers on Google Colab GPUs.  
* Measure quality with GLEU, precision, recall, and F1.  
* Wrap the model in a lightweight FastAPI service so users can POST text and get corrected output.  
Optional extras include batch endpoints, ONNX/quantized inference, and WandB experiment tracking.

---

### Resources

* Basics of Neural Networks & Transformer
  <https://youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi&si=WGVaBp3-osE6ohtc>
* Quick tour of Hugging Face Transformers  
  <https://huggingface.co/docs/transformers/quicktour>  
* T5 paper — *Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer*  
  <https://arxiv.org/pdf/1910.10683>  
