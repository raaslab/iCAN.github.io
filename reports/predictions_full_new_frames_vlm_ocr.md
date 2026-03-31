# Prediction Report

Source JSON: `predictions_full_new_frames_vlm_ocr.json`

Entries: 100

This file is intended for side-by-side visual review in your editor preview.


## 1. hires_20260318-153030_box_0.72.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260318-153030_box_0.72.jpg" alt="hires_20260318-153030_box_0.72.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260318-153030_box_0.72.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>weak</td></tr>
<tr><th align='left'>Display Name</th><td>milk, dairy, 1 gallon jug</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td>milk</td></tr>
<tr><th align='left'>Variant</th><td>milk</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>jug</td></tr>
<tr><th align='left'>Package</th><td>1 gallon jug</td></tr>
<tr><th align='left'>Size</th><td>1 gallon</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td></td></tr>
<tr><th align='left'>OCR Engine</th><td>none</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>1 gallon</td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>jug</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td>milk</td></tr>
<tr><th align='left'>Resolver Family</th><td>dairy</td></tr>
<tr><th align='left'>Resolver Container</th><td>jug</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>The vision model identified the container as a flexible jug and its shape suggests it is a common type for milk. The size text also indicates a gallon, which is a standard size for milk packaging.</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;jug&quot;,
  &quot;container_spec&quot;: &quot;flexible&quot;,
  &quot;size_text&quot;: &quot;1 gallon&quot;,
  &quot;best_catalog_match&quot;: &quot;milk&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;shape&quot;],
  &quot;notes&quot;: &quot;The container is a flexible jug commonly used for milk, and its shape and size suggest it is a 1-gallon jug.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;milk&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;jug&quot;,
  &quot;container_spec&quot;: &quot;flexible&quot;,
  &quot;size_text&quot;: &quot;1 gallon&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: [&quot;The vision model identified the container as a flexible jug and its shape suggests it is a common type for milk. The size text also indicates a gallon, which is a standard size for milk packaging.&quot;]
}</pre>
</details>

## 2. hires_20260318-153033_cup_0.83.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260318-153033_cup_0.83.jpg" alt="hires_20260318-153033_cup_0.83.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260318-153033_cup_0.83.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Chobani Vanilla, dairy, 20g Protein tub</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Chobani</td></tr>
<tr><th align='left'>Product</th><td>Chobani Vanilla</td></tr>
<tr><th align='left'>Variant</th><td>Vanilla</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>tub</td></tr>
<tr><th align='left'>Package</th><td>20g Protein tub</td></tr>
<tr><th align='left'>Size</th><td>20g Protein</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>a= Pe isa nee Cae Cae tesa Bie Li Ja Be Det Bd ce tugrets bt ar utieas ped Zero Added Sugar* ee ME AL ak neues evn</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot180</td></tr>
<tr><th align='left'>OCR Size</th><td>20g Protein</td></tr>
<tr><th align='left'>VLM Brand</th><td>Chobani</td></tr>
<tr><th align='left'>VLM Variant</th><td>Vanilla</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>tub</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Chobani</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Vanilla</td></tr>
<tr><th align='left'>Resolver Family</th><td>dairy</td></tr>
<tr><th align='left'>Resolver Container</th><td>tub</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Chobani&quot;,
  &quot;product_variant&quot;: &quot;Vanilla&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;Zero Added Sugar&quot;,
  &quot;size_text&quot;: &quot;20g Protein&quot;,
  &quot;best_catalog_match&quot;: &quot;yogurt&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a close-up of a Chobani yogurt container with a focus on the &#x27;Zero Added Sugar&#x27; label and &#x27;20g Protein&#x27; text.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Chobani&quot;,
  &quot;product_variant&quot;: &quot;Vanilla&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;Zero Added Sugar&quot;,
  &quot;size_text&quot;: &quot;20g Protein&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}</pre>
</details>

## 3. hires_20260318-153035_bottle_0.88.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260318-153035_bottle_0.88.jpg" alt="hires_20260318-153035_bottle_0.88.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260318-153035_bottle_0.88.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Coca-Cola Classic, soda, 200 ml bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Product</th><td>Coca-Cola Classic</td></tr>
<tr><th align='left'>Variant</th><td>Classic</td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>200 ml bottle</td></tr>
<tr><th align='left'>Size</th><td>200 ml</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>= WW s a) cc Zap</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot90</td></tr>
<tr><th align='left'>OCR Size</th><td>200 ml</td></tr>
<tr><th align='left'>VLM Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>VLM Variant</th><td>Classic</td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Classic</td></tr>
<tr><th align='left'>Resolver Family</th><td>soda</td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;Classic&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;200 ml&quot;,
  &quot;best_catalog_match&quot;: &quot;Coca-Cola Classic 200ml bottle&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;size_text&quot;],
  &quot;notes&quot;: &quot;The image shows a clear plastic bottle with a red label featuring the Coca-Cola logo and the text &#x27;200 ml&#x27;. The bottle appears to be a standard 200ml Coca-Cola Classic bottle.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;Classic&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;200 ml&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}</pre>
</details>

## 4. hires_20260318-153035_bottle_0.93.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260318-153035_bottle_0.93.jpg" alt="hires_20260318-153035_bottle_0.93.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260318-153035_bottle_0.93.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Coca-Cola Zero, soda, 20 oz bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Product</th><td>Coca-Cola Zero</td></tr>
<tr><th align='left'>Variant</th><td>Zero</td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>20 oz bottle</td></tr>
<tr><th align='left'>Size</th><td>20 oz</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>Se vs ee oe oe Pel 4 met aoe ies</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot180</td></tr>
<tr><th align='left'>OCR Size</th><td>20 oz</td></tr>
<tr><th align='left'>VLM Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>VLM Variant</th><td>Zero</td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Zero</td></tr>
<tr><th align='left'>Resolver Family</th><td>soda</td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;Zero&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;20 oz&quot;,
  &quot;best_catalog_match&quot;: &quot;soda&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a plastic bottle with a label indicating it is a zero-calorie soda.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> Based on the given OCR text and the raw vision model output, the normalized JSON would be:

```json
{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;Zero&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;20 oz&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}
```

The reasons field is empty as there are no instances of noisy or hallucinated details in this example. The raw vision model output was used to fill in the details and the OCR text was not relevant for this specific instance.</pre>
</details>

## 5. hires_20260318-153035_bottle_0.96.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260318-153035_bottle_0.96.jpg" alt="hires_20260318-153035_bottle_0.96.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260318-153035_bottle_0.96.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Pepsi Diet, soda, 500 ml bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Pepsi</td></tr>
<tr><th align='left'>Product</th><td>Pepsi Diet</td></tr>
<tr><th align='left'>Variant</th><td>Diet</td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>500 ml bottle</td></tr>
<tr><th align='left'>Size</th><td>500 ml</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>Pa Mt Cis 4 50&quot; — oT a</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot180</td></tr>
<tr><th align='left'>OCR Size</th><td>500 ml</td></tr>
<tr><th align='left'>VLM Brand</th><td>Pepsi</td></tr>
<tr><th align='left'>VLM Variant</th><td>Diet</td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Pepsi</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Diet</td></tr>
<tr><th align='left'>Resolver Family</th><td>soda</td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Pepsi&quot;,
  &quot;product_variant&quot;: &quot;Diet&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;500 ml&quot;,
  &quot;size_text&quot;: &quot;500 ml&quot;,
  &quot;best_catalog_match&quot;: &quot;diet soda bottle&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a clear plastic bottle with a silver label featuring the Pepsi logo and the word &#x27;Diet&#x27;. The OCR text confirms the product variant and size.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Pepsi&quot;,
  &quot;product_variant&quot;: &quot;Diet&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;500 ml&quot;,
  &quot;size_text&quot;: &quot;500 ml&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}</pre>
</details>

## 6. hires_20260318-153035_cup_0.93.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260318-153035_cup_0.93.jpg" alt="hires_20260318-153035_cup_0.93.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260318-153035_cup_0.93.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Yoplait Greek Yogurt, dairy, 5.3 oz tub</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Yoplait</td></tr>
<tr><th align='left'>Product</th><td>Yoplait Greek Yogurt</td></tr>
<tr><th align='left'>Variant</th><td>Greek Yogurt</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>tub</td></tr>
<tr><th align='left'>Package</th><td>5.3 oz tub</td></tr>
<tr><th align='left'>Size</th><td>5.3 oz</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>x io 2&quot; om = TN aot jor you 3. 3 ¢ v if a) 30</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot180</td></tr>
<tr><th align='left'>OCR Size</th><td>5.3 oz</td></tr>
<tr><th align='left'>VLM Brand</th><td>Yoplait</td></tr>
<tr><th align='left'>VLM Variant</th><td>Greek Yogurt</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>tub</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Yoplait</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Greek Yogurt</td></tr>
<tr><th align='left'>Resolver Family</th><td>dairy</td></tr>
<tr><th align='left'>Resolver Container</th><td>tub</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Yoplait&quot;,
  &quot;product_variant&quot;: &quot;Greek Yogurt&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;5.3 oz&quot;,
  &quot;size_text&quot;: &quot;5.3 oz&quot;,
  &quot;best_catalog_match&quot;: &quot;Yoplait Greek Yogurt&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;, &quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a close-up of a container with a label indicating it is a Greek yogurt product with probiotics, and the container type is a tub.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Yoplait&quot;,
  &quot;product_variant&quot;: &quot;Greek Yogurt&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;5.3 oz&quot;,
  &quot;size_text&quot;: &quot;5.3 oz&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}</pre>
</details>

## 7. hires_20260318-153036_bottle_0.96.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260318-153036_bottle_0.96.jpg" alt="hires_20260318-153036_bottle_0.96.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260318-153036_bottle_0.96.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Orville Redenbacher Redenbacher&#x27;s, popcorn, 16 OZ jar</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Orville Redenbacher</td></tr>
<tr><th align='left'>Product</th><td>Orville Redenbacher Redenbacher&#x27;s</td></tr>
<tr><th align='left'>Variant</th><td>Redenbacher&#x27;s</td></tr>
<tr><th align='left'>Category</th><td>popcorn</td></tr>
<tr><th align='left'>Container</th><td>jar</td></tr>
<tr><th align='left'>Package</th><td>16 OZ jar</td></tr>
<tr><th align='left'>Size</th><td>16 OZ</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>‘Sa a i) ce aN YY ¥ om \ ee bes Bos Xo</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>16 OZ</td></tr>
<tr><th align='left'>VLM Brand</th><td>Orville&#x27;s</td></tr>
<tr><th align='left'>VLM Variant</th><td>Redenbacher&#x27;s</td></tr>
<tr><th align='left'>VLM Family</th><td>condiment</td></tr>
<tr><th align='left'>VLM Container</th><td>jar</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Orville Redenbacher</td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td>popcorn</td></tr>
<tr><th align='left'>Resolver Container</th><td>jar</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>The vision model output identifies the brand as Orville&#x27;s, a brand associated with popcorn products.</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Orville&#x27;s&quot;,
  &quot;product_variant&quot;: &quot;Redenbacher&#x27;s&quot;,
  &quot;product_family&quot;: &quot;condiment&quot;,
  &quot;container_type&quot;: &quot;jar&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;16 OZ&quot;,
  &quot;best_catalog_match&quot;: &quot;popcorn kernels&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The label indicates it is a product of Orville&#x27;s, a brand known for popcorn products, and the container is a jar, which is typical for popcorn kernels.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Orville Redenbacher&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;popcorn&quot;,
  &quot;container_type&quot;: &quot;jar&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;16 OZ&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: [&quot;The vision model output identifies the brand as Orville&#x27;s, a brand associated with popcorn products.&quot;]
}</pre>
</details>

## 8. hires_20260318-153036_cup_0.94.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260318-153036_cup_0.94.jpg" alt="hires_20260318-153036_cup_0.94.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260318-153036_cup_0.94.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Chobani Nonfat Greek Yogurt, dairy, 5.3 oz (150g) tub</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Chobani</td></tr>
<tr><th align='left'>Product</th><td>Chobani Nonfat Greek Yogurt</td></tr>
<tr><th align='left'>Variant</th><td>Nonfat Greek Yogurt</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>tub</td></tr>
<tr><th align='left'>Package</th><td>5.3 oz (150g) tub</td></tr>
<tr><th align='left'>Size</th><td>5.3 oz (150g)</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>of yt e ace 4 cat to at ge st qo af?</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>5.3 oz (150g)</td></tr>
<tr><th align='left'>VLM Brand</th><td>Chobani</td></tr>
<tr><th align='left'>VLM Variant</th><td>Nonfat Greek Yogurt</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>tub</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Chobani</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Nonfat Greek Yogurt</td></tr>
<tr><th align='left'>Resolver Family</th><td>dairy</td></tr>
<tr><th align='left'>Resolver Container</th><td>tub</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Chobani&quot;,
  &quot;product_variant&quot;: &quot;Nonfat Greek Yogurt&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;5.3 oz (150g)&quot;,
  &quot;size_text&quot;: &quot;5.3 oz (150g)&quot;,
  &quot;best_catalog_match&quot;: &quot;Greek Yogurt&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a close-up of a Chobani Greek Yogurt container with nutritional information and branding visible.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Chobani&quot;,
  &quot;product_variant&quot;: &quot;Nonfat Greek Yogurt&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;5.3 oz (150g)&quot;,
  &quot;size_text&quot;: &quot;5.3 oz (150g)&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}</pre>
</details>

## 9. hires_20260318-153036_thermoform_0.85.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260318-153036_thermoform_0.85.jpg" alt="hires_20260318-153036_thermoform_0.85.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260318-153036_thermoform_0.85.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>nothing</td></tr>
<tr><th align='left'>Display Name</th><td>12-cup</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>clamshell</td></tr>
<tr><th align='left'>Package</th><td>12-cup</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>. pei se tO SS PS —_ aN a 8 4 es a al ne “) &lt;A gn S42 ial ad</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot270</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td></td></tr>
<tr><th align='left'>VLM Container</th><td>clamshell</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td>clamshell</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>OCR and vision outputs do not contain identifiable brand information.</li>
<li>The container appears to be used for storing ice cubes or similar items, which are generic in nature and thus not considered a brand.</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;clamshell&quot;,
  &quot;container_spec&quot;: &quot;12-cup&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a clear plastic clamshell container with 12 circular compartments, likely used for storing ice cubes or similar items. The OCR text and shortlist candidates are not applicable as there is no brand or product information visible.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;clamshell&quot;,
  &quot;container_spec&quot;: &quot;12-cup&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [
    &quot;OCR and vision outputs do not contain identifiable brand information.&quot;,
    &quot;The container appears to be used for storing ice cubes or similar items, which are generic in nature and thus not considered a brand.&quot;
  ]
}</pre>
</details>

## 10. hires_20260318-153038_cup_0.96.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260318-153038_cup_0.96.jpg" alt="hires_20260318-153038_cup_0.96.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260318-153038_cup_0.96.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>nothing</td></tr>
<tr><th align='left'>Display Name</th><td>white plastic with lid</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>cup</td></tr>
<tr><th align='left'>Package</th><td>white plastic with lid</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>cy</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td></td></tr>
<tr><th align='left'>VLM Container</th><td>cup</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td>cup</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>OCR text is not available or unreadable</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;cup&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a circular, white plastic container with a lid, which is commonly used for disposable cups.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;cup&quot;,
  &quot;container_spec&quot;: &quot;white plastic with lid&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [&quot;OCR text is not available or unreadable&quot;]
}</pre>
</details>

## 11. hires_20260318-153040_bottle_0.79.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260318-153040_bottle_0.79.jpg" alt="hires_20260318-153040_bottle_0.79.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260318-153040_bottle_0.79.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>medium</td></tr>
<tr><th align='left'>Display Name</th><td>Coca-Cola, carbonated beverages, bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.6</td></tr>
<tr><th align='left'>Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Product</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td>carbonated beverages</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>bottle</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>Ps ) a8 a he, SS , ay</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot270</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td></td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td>carbonated beverages</td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.6</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>container type and cap color suggest Coca-Cola</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a plastic bottle with a red cap, but the OCR text and shortlist candidates are not applicable.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> Based on the provided OCR text and vision model output, it&#x27;s challenging to determine specific brand details as the text is quite noisy. However, we can make an educated guess based on the container type (bottle) and the color of the cap (red). A common beverage that comes in a red plastic bottle with a distinct shape is Coca-Cola.

Here&#x27;s the normalized JSON output:

```json
{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;Carbonated Beverages&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.6,
  &quot;reasons&quot;: [&quot;container type and cap color suggest Coca-Cola&quot;]
}
```</pre>
</details>

## 12. hires_20260318-153040_bottle_0.97.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260318-153040_bottle_0.97.jpg" alt="hires_20260318-153040_bottle_0.97.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260318-153040_bottle_0.97.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>me Yogurt, dairy, 16 fl oz bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>me</td></tr>
<tr><th align='left'>Product</th><td>me Yogurt</td></tr>
<tr><th align='left'>Variant</th><td>Yogurt</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>16 fl oz bottle</td></tr>
<tr><th align='left'>Size</th><td>16 fl oz</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>git Ae A Ge. ae ie. Zs 4 we oo 98&quot; sO . g Se Se CO SS Sy \ x SS Sy %, Siig of eA CX</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot270</td></tr>
<tr><th align='left'>OCR Size</th><td>16 fl oz</td></tr>
<tr><th align='left'>VLM Brand</th><td>me</td></tr>
<tr><th align='left'>VLM Variant</th><td>Yogurt</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td>Yogurt</td></tr>
<tr><th align='left'>Resolver Family</th><td>dairy</td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;me&quot;,
  &quot;product_variant&quot;: &quot;Yogurt&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;16 fl oz&quot;,
  &quot;size_text&quot;: &quot;16 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;yogurt&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a bottle of yogurt with a red cap and a label indicating it is a dairy product.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;Yogurt&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;16 fl oz&quot;,
  &quot;size_text&quot;: &quot;16 fl oz&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}</pre>
</details>

## 13. hires_20260318-153040_bottle_0.98.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260318-153040_bottle_0.98.jpg" alt="hires_20260318-153040_bottle_0.98.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260318-153040_bottle_0.98.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>nothing</td></tr>
<tr><th align='left'>Display Name</th><td>bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>bottle</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>fo? g /</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td></td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>No specific brand or product details are visible.</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;label&quot;],
  &quot;notes&quot;: &quot;The label indicates the bottle is made from recycled material and has a QR code, but no specific brand or product details are visible.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [&quot;No specific brand or product details are visible.&quot;]
}</pre>
</details>

## 14. hires_20260318-153041_bottle_0.98.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260318-153041_bottle_0.98.jpg" alt="hires_20260318-153041_bottle_0.98.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260318-153041_bottle_0.98.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>me Yogurt, dairy, 16 fl oz bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>me</td></tr>
<tr><th align='left'>Product</th><td>me Yogurt</td></tr>
<tr><th align='left'>Variant</th><td>Yogurt</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>16 fl oz bottle</td></tr>
<tr><th align='left'>Size</th><td>16 fl oz</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>a AD se SES w Senos we @ et Xe) mia KY es fe) Ui</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot180</td></tr>
<tr><th align='left'>OCR Size</th><td>16 fl oz</td></tr>
<tr><th align='left'>VLM Brand</th><td>me</td></tr>
<tr><th align='left'>VLM Variant</th><td>Yogurt</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td>Yogurt</td></tr>
<tr><th align='left'>Resolver Family</th><td>dairy</td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;me&quot;,
  &quot;product_variant&quot;: &quot;Yogurt&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;16 fl oz&quot;,
  &quot;size_text&quot;: &quot;16 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;yogurt&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a bottle with a label indicating it is a yogurt product.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> Based on the provided OCR text and vision model output, the normalized JSON would look like this:

```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;Yogurt&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;16 fl oz&quot;,
  &quot;size_text&quot;: &quot;16 fl oz&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}
```

In this case, the OCR text is not specific enough to identify a brand, so we set `brand` to an empty string. The rest of the details provided by the vision model output are retained as they were.</pre>
</details>

## 15. hires_20260318-153041_cup_0.95.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260318-153041_cup_0.95.jpg" alt="hires_20260318-153041_cup_0.95.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260318-153041_cup_0.95.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>nothing</td></tr>
<tr><th align='left'>Display Name</th><td>tub</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>tub</td></tr>
<tr><th align='left'>Package</th><td>tub</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>5 So oe hy iy Se &amp; Se Ly i tlt Ms iW ry &quot;9 i v saueiaa am</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td></td></tr>
<tr><th align='left'>VLM Container</th><td>tub</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td>tub</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>OCR text is not clear and does not provide any identifiable information about the product or brand.</li>
<li>The raw vision model output suggests a tub for a cosmetic or personal care product.</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image appears to be a close-up of a tub, possibly a container for a cosmetic or personal care product, but the OCR text is not clear and does not provide any identifiable information about the product or brand.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [&quot;OCR text is not clear and does not provide any identifiable information about the product or brand.&quot;, &quot;The raw vision model output suggests a tub for a cosmetic or personal care product.&quot;]
}</pre>
</details>

## 16. hires_20260318-153042_box_0.86.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260318-153042_box_0.86.jpg" alt="hires_20260318-153042_box_0.86.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260318-153042_box_0.86.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>nothing</td></tr>
<tr><th align='left'>Display Name</th><td>black</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>clamshell</td></tr>
<tr><th align='left'>Package</th><td>black</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>ZS Sapo aa Lt) ad Le, SO poe \G © i \ .y Ne ee te 2 re \ \ \ \ \ \ a \ ee A ie AG iA oO &lt;o. “oN CTT el 2 . eS</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td></td></tr>
<tr><th align='left'>VLM Container</th><td>clamshell</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td>clamshell</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>No relevant information in the image</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;clamshell&quot;,
  &quot;container_spec&quot;: &quot;black&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a black plastic clamshell container with a ribbed interior, likely used for food storage or takeout. The OCR text and shortlist candidates are not applicable as there is no relevant information in the image.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> Based on the provided OCR text and raw vision model output, I&#x27;m unable to identify a specific brand, product variant, product family, or size_text. However, from the vision model output, it suggests that the container type is &quot;clamshell&quot; and the container spec is &quot;black&quot;.

Here is the JSON response according to your schema:

```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;clamshell&quot;,
  &quot;container_spec&quot;: &quot;black&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [&quot;No relevant information in the image&quot;]
}
```</pre>
</details>

## 17. hires_20260318-153044_bottle_0.97.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260318-153044_bottle_0.97.jpg" alt="hires_20260318-153044_bottle_0.97.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260318-153044_bottle_0.97.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Vinegar, condiment, 1 gallon jug</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Vinegar</td></tr>
<tr><th align='left'>Product</th><td>Vinegar</td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td>condiment</td></tr>
<tr><th align='left'>Container</th><td>jug</td></tr>
<tr><th align='left'>Package</th><td>1 gallon jug</td></tr>
<tr><th align='left'>Size</th><td>1 gallon</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>‘ypreoan {Mtrtion Facts) see mt alories_O) © ¥ wa 2 ea atl a Sones =) SA) a4 ya 4</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot90</td></tr>
<tr><th align='left'>OCR Size</th><td>1 gallon</td></tr>
<tr><th align='left'>VLM Brand</th><td>Vinegar</td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td>condiment</td></tr>
<tr><th align='left'>VLM Container</th><td>jug</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td>condiment</td></tr>
<tr><th align='left'>Resolver Container</th><td>jug</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>The OCR text is not readable enough to determine the brand. The vision model output suggests it&#x27;s a vinegar product, but the brand cannot be definitively identified.</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Vinegar&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;condiment&quot;,
  &quot;container_type&quot;: &quot;jug&quot;,
  &quot;container_spec&quot;: &quot;1 gallon&quot;,
  &quot;size_text&quot;: &quot;1 gallon&quot;,
  &quot;best_catalog_match&quot;: &quot;vinegar&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;label&quot;, &quot;shape&quot;],
  &quot;notes&quot;: &quot;The label indicates it is a vinegar product, and the shape and size suggest it is a jug.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;condiment&quot;,
  &quot;container_type&quot;: &quot;jug&quot;,
  &quot;container_spec&quot;: &quot;1 gallon&quot;,
  &quot;size_text&quot;: &quot;1 gallon&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: [&quot;The OCR text is not readable enough to determine the brand. The vision model output suggests it&#x27;s a vinegar product, but the brand cannot be definitively identified.&quot;]
}</pre>
</details>

## 18. hires_20260318-153044_can_0.83.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260318-153044_can_0.83.jpg" alt="hires_20260318-153044_can_0.83.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260318-153044_can_0.83.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>nothing</td></tr>
<tr><th align='left'>Display Name</th><td>beverage can</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td>beverage</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>can</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>Oi Fil J Yhiag /// Za, a, Oy i</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot90</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td></td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td>beverage</td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>The OCR text is not clear and does not provide any identifiable information about the product.</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a can with a yellow label and a nutrition facts panel, but the OCR text is not clear and does not provide any identifiable information about the product.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> Based on the provided OCR text and raw vision model output, it seems there isn&#x27;t enough clear information to identify the brand or product variant. However, given that the container type is a can, we can infer a general category for the product family (beverage). Here&#x27;s the JSON response:

```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;Beverage&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [
    &quot;The OCR text is not clear and does not provide any identifiable information about the product.&quot;
  ]
}
```</pre>
</details>

## 19. hires_20260318-153044_cup_0.84.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260318-153044_cup_0.84.jpg" alt="hires_20260318-153044_cup_0.84.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260318-153044_cup_0.84.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>nothing</td></tr>
<tr><th align='left'>Display Name</th><td>can</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>can</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>aati aly 5) Se y</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot180</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td></td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>The OCR text is not providing enough information to confidently identify the brand, product variant, or product family.</li>
<li>The raw vision model output only identifies the container type as &#x27;can&#x27;.</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a close-up of a can, likely a beverage can, but the OCR text and shortlist candidates are not providing enough information to confidently identify the brand, product variant, or product family.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> Based on the given rules and the provided OCR text and vision model output, the JSON response would be:

```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [
    &quot;The OCR text is not providing enough information to confidently identify the brand, product variant, or product family.&quot;,
    &quot;The raw vision model output only identifies the container type as &#x27;can&#x27;.&quot;
  ]
}
```</pre>
</details>

## 20. hires_20260318-153045_can_0.82.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260318-153045_can_0.82.jpg" alt="hires_20260318-153045_can_0.82.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260318-153045_can_0.82.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>nothing</td></tr>
<tr><th align='left'>Display Name</th><td>can</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>can</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>Hi poet { i U oe Fic</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td></td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>OCR text is not clear</li>
<li>No shortlist candidates provided</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a close-up of a can with a partially visible label, but the OCR text is not clear and the shortlist candidates are not provided. The container type is identified as a can.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [&quot;OCR text is not clear&quot;, &quot;No shortlist candidates provided&quot;]
}</pre>
</details>

## 21. hires_20260318-153045_can_0.94.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260318-153045_can_0.94.jpg" alt="hires_20260318-153045_can_0.94.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260318-153045_can_0.94.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>weak</td></tr>
<tr><th align='left'>Display Name</th><td>Aera Lily A, can</td></tr>
<tr><th align='left'>Confidence</th><td>0.5</td></tr>
<tr><th align='left'>Brand</th><td>Aera</td></tr>
<tr><th align='left'>Product</th><td>Aera Lily A</td></tr>
<tr><th align='left'>Variant</th><td>Lily A</td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>can</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>aera paaay/ play) tn Bicalag Lily A</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot270</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td></td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Aera</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Lily A</td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.5</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>OCR text provides brand name and variant</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a close-up of a can with a yellow label, but the OCR text and shortlist candidates are not providing enough information to confidently identify the product or its family.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Aera&quot;,
  &quot;product_variant&quot;: &quot;Lily A&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.5,
  &quot;reasons&quot;: [&quot;OCR text provides brand name and variant&quot;]
}</pre>
</details>

## 22. hires_20260318-153046_bottle_0.73.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260318-153046_bottle_0.73.jpg" alt="hires_20260318-153046_bottle_0.73.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260318-153046_bottle_0.73.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Spong Strawberry, juice, 12 fl oz bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Spong</td></tr>
<tr><th align='left'>Product</th><td>Spong Strawberry</td></tr>
<tr><th align='left'>Variant</th><td>Strawberry</td></tr>
<tr><th align='left'>Category</th><td>juice</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>12 fl oz bottle</td></tr>
<tr><th align='left'>Size</th><td>12 fl oz</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>yy 4 HF eae se 3 SS Sate SS &lt;i sie ws so ae A oe we o an pes ‘a ae e ge . Sa es ee Ae) &gt;</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot90</td></tr>
<tr><th align='left'>OCR Size</th><td>12 fl oz</td></tr>
<tr><th align='left'>VLM Brand</th><td>Spong Water</td></tr>
<tr><th align='left'>VLM Variant</th><td>Strawberry</td></tr>
<tr><th align='left'>VLM Family</th><td>juice</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Spong</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Strawberry</td></tr>
<tr><th align='left'>Resolver Family</th><td>juice</td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Spong Water&quot;,
  &quot;product_variant&quot;: &quot;Strawberry&quot;,
  &quot;product_family&quot;: &quot;juice&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;squeeze bottle&quot;,
  &quot;size_text&quot;: &quot;12 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;Spong Water Strawberry&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a close-up of a squeeze bottle with a label indicating it is a strawberry-flavored Spong Water product.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Spong&quot;,
  &quot;product_variant&quot;: &quot;Strawberry&quot;,
  &quot;product_family&quot;: &quot;juice&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;squeeze bottle&quot;,
  &quot;size_text&quot;: &quot;12 fl oz&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}</pre>
</details>

## 23. hires_20260318-153046_bottle_0.94.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260318-153046_bottle_0.94.jpg" alt="hires_20260318-153046_bottle_0.94.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260318-153046_bottle_0.94.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>nothing</td></tr>
<tr><th align='left'>Display Name</th><td>unknown bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td>unknown</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>squeeze bottle</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>FS yo rs uN ~~ SS wee es ae ee ed oh Sh</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot90</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td></td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td>unknown</td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>OCR text and vision output do not provide sufficient information to confidently identify the brand or product family.</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;squeeze bottle&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;, &quot;logo&quot;],
  &quot;notes&quot;: &quot;The image shows a squeeze bottle with a green label, which suggests it could be a personal care or food product. However, the OCR text and shortlist candidates are not providing enough information to confidently identify the product family or brand.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;Unknown&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;squeeze bottle&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [&quot;OCR text and vision output do not provide sufficient information to confidently identify the brand or product family.&quot;]
}</pre>
</details>

## 24. hires_20260318-153046_bottle_0.96.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260318-153046_bottle_0.96.jpg" alt="hires_20260318-153046_bottle_0.96.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260318-153046_bottle_0.96.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>cashew MALL, juice, 28 FL OZ (1.75 PT) (829 mL) bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>cashew</td></tr>
<tr><th align='left'>Product</th><td>cashew MALL</td></tr>
<tr><th align='left'>Variant</th><td>MALL</td></tr>
<tr><th align='left'>Category</th><td>juice</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>28 FL OZ (1.75 PT) (829 mL) bottle</td></tr>
<tr><th align='left'>Size</th><td>28 FL OZ (1.75 PT) (829 mL)</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>Ot Fp Sh; Oe K Liye G4 Nic % bs QR (I Lg</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>28 FL OZ (1.75 PT) (829 mL)</td></tr>
<tr><th align='left'>VLM Brand</th><td>cashew</td></tr>
<tr><th align='left'>VLM Variant</th><td>MALL</td></tr>
<tr><th align='left'>VLM Family</th><td>juice</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td>MALL</td></tr>
<tr><th align='left'>Resolver Family</th><td>juice</td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>The OCR output does not provide a specific brand name.</li>
<li>Vision model identifies the product as &#x27;cashew&#x27;, which is a type of nut and not a brand.</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;cashew&quot;,
  &quot;product_variant&quot;: &quot;MALL&quot;,
  &quot;product_family&quot;: &quot;juice&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;28 FL OZ (1.75 PT) (829 mL)&quot;,
  &quot;size_text&quot;: &quot;28 FL OZ (1.75 PT) (829 mL)&quot;,
  &quot;best_catalog_match&quot;: &quot;juice&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The product is labeled as &#x27;organic&#x27; and &#x27;gum free&#x27;, suggesting it is a juice product.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;MALL&quot;,
  &quot;product_family&quot;: &quot;juice&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;28 FL OZ (1.75 PT) (829 mL)&quot;,
  &quot;size_text&quot;: &quot;28 FL OZ (1.75 PT) (829 mL)&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: [
    &quot;The OCR output does not provide a specific brand name.&quot;,
    &quot;Vision model identifies the product as &#x27;cashew&#x27;, which is a type of nut and not a brand.&quot;
  ]
}</pre>
</details>

## 25. hires_20260318-153047_bottle_0.88.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260318-153047_bottle_0.88.jpg" alt="hires_20260318-153047_bottle_0.88.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260318-153047_bottle_0.88.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Tropicana Strawberry, juice, 100% jug</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Tropicana</td></tr>
<tr><th align='left'>Product</th><td>Tropicana Strawberry</td></tr>
<tr><th align='left'>Variant</th><td>Strawberry</td></tr>
<tr><th align='left'>Category</th><td>juice</td></tr>
<tr><th align='left'>Container</th><td>jug</td></tr>
<tr><th align='left'>Package</th><td>100% jug</td></tr>
<tr><th align='left'>Size</th><td>100%</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>sy ey ‘ade x s Sy ad RS BS Of a .</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot90</td></tr>
<tr><th align='left'>OCR Size</th><td>100%</td></tr>
<tr><th align='left'>VLM Brand</th><td>Tropicana</td></tr>
<tr><th align='left'>VLM Variant</th><td>Strawberry</td></tr>
<tr><th align='left'>VLM Family</th><td>juice</td></tr>
<tr><th align='left'>VLM Container</th><td>jug</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Tropicana</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Strawberry</td></tr>
<tr><th align='left'>Resolver Family</th><td>juice</td></tr>
<tr><th align='left'>Resolver Container</th><td>jug</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Tropicana&quot;,
  &quot;product_variant&quot;: &quot;Strawberry&quot;,
  &quot;product_family&quot;: &quot;juice&quot;,
  &quot;container_type&quot;: &quot;jug&quot;,
  &quot;container_spec&quot;: &quot;100% Natural&quot;,
  &quot;size_text&quot;: &quot;100%&quot;,
  &quot;best_catalog_match&quot;: &quot;Tropicana 100% Natural Strawberry Juice&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a close-up of a jug with a label indicating it is a strawberry-flavored juice.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Tropicana&quot;,
  &quot;product_variant&quot;: &quot;Strawberry&quot;,
  &quot;product_family&quot;: &quot;Juice&quot;,
  &quot;container_type&quot;: &quot;Jug&quot;,
  &quot;container_spec&quot;: &quot;100% Natural&quot;,
  &quot;size_text&quot;: &quot;100%&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}</pre>
</details>

## 26. hires_20260318-153047_bottle_0.97.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260318-153047_bottle_0.97.jpg" alt="hires_20260318-153047_bottle_0.97.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260318-153047_bottle_0.97.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Malk Unsweetened Cashew Milk, milk alternative, 4 g bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Malk</td></tr>
<tr><th align='left'>Product</th><td>Malk Unsweetened Cashew Milk</td></tr>
<tr><th align='left'>Variant</th><td>Unsweetened Cashew Milk</td></tr>
<tr><th align='left'>Category</th><td>milk alternative</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>4 g bottle</td></tr>
<tr><th align='left'>Size</th><td>4 g</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>4g 4, Y</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>4 g</td></tr>
<tr><th align='left'>VLM Brand</th><td>MALK</td></tr>
<tr><th align='left'>VLM Variant</th><td>Unsweetened</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Malk</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Unsweetened Cashew Milk</td></tr>
<tr><th align='left'>Resolver Family</th><td>milk alternative</td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;MALK&quot;,
  &quot;product_variant&quot;: &quot;Unsweetened&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;28 FL OZ (1.75 PT) (828 mL)&quot;,
  &quot;size_text&quot;: &quot;28 FL OZ (1.75 PT) (828 mL)&quot;,
  &quot;best_catalog_match&quot;: &quot;milk alternative&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The product is labeled as &#x27;cashew milk&#x27; and is organic, unsweetened, and contains 4 simple ingredients.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Malk&quot;,
  &quot;product_variant&quot;: &quot;Unsweetened Cashew Milk&quot;,
  &quot;product_family&quot;: &quot;Milk Alternative&quot;,
  &quot;container_type&quot;: &quot;Bottle&quot;,
  &quot;container_spec&quot;: &quot;28 FL OZ (1.75 PT) (828 mL)&quot;,
  &quot;size_text&quot;: &quot;28 FL OZ (1.75 PT) (828 mL)&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}</pre>
</details>

## 27. hires_20260318-153047_can_0.96.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260318-153047_can_0.96.jpg" alt="hires_20260318-153047_can_0.96.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260318-153047_can_0.96.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Lemon Cello, sparkling water, 105 can</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Lemon Cello</td></tr>
<tr><th align='left'>Product</th><td>Lemon Cello</td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td>sparkling water</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>105 can</td></tr>
<tr><th align='left'>Size</th><td>105</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>Lites 105 | JA Wi</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot90</td></tr>
<tr><th align='left'>OCR Size</th><td>105</td></tr>
<tr><th align='left'>VLM Brand</th><td>Lemon Cello</td></tr>
<tr><th align='left'>VLM Variant</th><td>Sparkling Water</td></tr>
<tr><th align='left'>VLM Family</th><td>sparkling water</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Lemon Cello</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Sparkling Water</td></tr>
<tr><th align='left'>Resolver Family</th><td>sparkling water</td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>The image and OCR text do not provide additional information that can be used to confirm the product or size.</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Lemon Cello&quot;,
  &quot;product_variant&quot;: &quot;Sparkling Water&quot;,
  &quot;product_family&quot;: &quot;sparkling water&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;yellow&quot;,
  &quot;size_text&quot;: &quot;105&quot;,
  &quot;best_catalog_match&quot;: &quot;Lemon Cello Sparkling Water&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a yellow can with the brand name &#x27;Lemon Cello&#x27; and the word &#x27;Sparkling Water&#x27; on it. The OCR text &#x27;Lites 105 | JA Wi&#x27; does not provide additional information that can be used to confirm the product or size.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Lemon Cello&quot;,
  &quot;product_variant&quot;: &quot;Sparkling Water&quot;,
  &quot;product_family&quot;: &quot;sparkling water&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;yellow&quot;,
  &quot;size_text&quot;: &quot;105&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: [&quot;The image and OCR text do not provide additional information that can be used to confirm the product or size.&quot;]
}</pre>
</details>

## 28. hires_20260318-153047_cup_0.83.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260318-153047_cup_0.83.jpg" alt="hires_20260318-153047_cup_0.83.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260318-153047_cup_0.83.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>nothing</td></tr>
<tr><th align='left'>Display Name</th><td>can</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>can</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>oe — iy Fy ea A</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot180</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td></td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>Insufficient information to identify the brand</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a close-up of a metallic can with a red and white label, but the OCR text and shortlist candidates are not providing any additional information to identify the brand, product variant, or product family.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> Based on the provided OCR text and vision model output, there is insufficient information to determine the brand, product variant, product family, size_text, or container spec. Since the brand cannot be identified with certainty, it will be left empty in the JSON response. Here&#x27;s the normalized response:

```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [&quot;Insufficient information to identify the brand&quot;]
}
```

This response indicates that further analysis or additional data may be required for a more accurate interpretation of the provided image.</pre>
</details>

## 29. hires_20260321-112056_bottle_0.94.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112056_bottle_0.94.jpg" alt="hires_20260321-112056_bottle_0.94.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112056_bottle_0.94.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>International Delight, coffee creamer, 32 fl oz bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>International Delight</td></tr>
<tr><th align='left'>Product</th><td>International Delight</td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td>coffee creamer</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>32 fl oz bottle</td></tr>
<tr><th align='left'>Size</th><td>32 fl oz</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>Fe - pra’ on, ight &lt;= (eon Piet | il ne</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot270</td></tr>
<tr><th align='left'>OCR Size</th><td>32 fl oz</td></tr>
<tr><th align='left'>VLM Brand</th><td>International Delight</td></tr>
<tr><th align='left'>VLM Variant</th><td>Coffee Creamer</td></tr>
<tr><th align='left'>VLM Family</th><td>coffee creamer</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>International Delight</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Coffee Creamer</td></tr>
<tr><th align='left'>Resolver Family</th><td>coffee creamer</td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;International Delight&quot;,
  &quot;product_variant&quot;: &quot;Coffee Creamer&quot;,
  &quot;product_family&quot;: &quot;coffee creamer&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;squeeze bottle&quot;,
  &quot;size_text&quot;: &quot;32 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;International Delight Coffee Creamer&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a green squeeze bottle with a yellow cap, which is typical for coffee creamer products.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;International Delight&quot;,
  &quot;product_variant&quot;: &quot;Coffee Creamer&quot;,
  &quot;product_family&quot;: &quot;coffee creamer&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;squeeze bottle&quot;,
  &quot;size_text&quot;: &quot;32 fl oz&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}</pre>
</details>

## 30. hires_20260321-112058_box_0.94.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112058_box_0.94.jpg" alt="hires_20260321-112058_box_0.94.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112058_box_0.94.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>nothing</td></tr>
<tr><th align='left'>Display Name</th><td>clamshell</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>clamshell</td></tr>
<tr><th align='left'>Package</th><td>clamshell</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>ee —. —F | hs Sal wy. Si WS wr % Se , AN SS “A</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td></td></tr>
<tr><th align='left'>VLM Container</th><td>clamshell</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td>clamshell</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>The OCR text does not provide any information about the brand.</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;clamshell&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a clear plastic clamshell container, likely used for food or other items. The OCR text and shortlist candidates are not applicable as there is no text or shortlist provided.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> Based on the rules and the provided OCR text and vision model output, here&#x27;s the JSON response:

```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;clamshell&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [
    &quot;The OCR text does not provide any information about the brand.&quot;
  ]
}
```</pre>
</details>

## 31. hires_20260321-112058_can_0.93.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112058_can_0.93.jpg" alt="hires_20260321-112058_can_0.93.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112058_can_0.93.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>nothing</td></tr>
<tr><th align='left'>Display Name</th><td>yellow</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>yellow</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>SS</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td></td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>The image shows a can with a label, but the OCR text and specific product identification are not available.</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a yellow can with a label, but the OCR text and shortlist candidates are not available, making it difficult to identify the product family and variant.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;yellow&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [&quot;The image shows a can with a label, but the OCR text and specific product identification are not available.&quot;]
}</pre>
</details>

## 32. hires_20260321-112059_bottle_0.94.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112059_bottle_0.94.jpg" alt="hires_20260321-112059_bottle_0.94.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112059_bottle_0.94.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>So shey SS ce rey Al, sparkling water, 1 L bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>So shey</td></tr>
<tr><th align='left'>Product</th><td>So shey SS ce rey Al</td></tr>
<tr><th align='left'>Variant</th><td>SS ce rey Al</td></tr>
<tr><th align='left'>Category</th><td>sparkling water</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>1 L bottle</td></tr>
<tr><th align='left'>Size</th><td>1 L</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>So shey SS ce rey Al oR GANIC ue aw</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot90</td></tr>
<tr><th align='left'>OCR Size</th><td>1 L</td></tr>
<tr><th align='left'>VLM Brand</th><td>So shey</td></tr>
<tr><th align='left'>VLM Variant</th><td>SS ce rey Al</td></tr>
<tr><th align='left'>VLM Family</th><td>water</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>So shey</td></tr>
<tr><th align='left'>Resolver Variant</th><td>SS ce rey Al</td></tr>
<tr><th align='left'>Resolver Family</th><td>sparkling water</td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>The image shows a plastic bottle with a label that includes the word &#x27;organic&#x27; and &#x27;sparkling water&#x27;, suggesting it is a water product.</li>
<li>OCR text appears to be partially obscured but includes &#x27;So shey SS ce rey Al&#x27;, which might be a brand name or product variant.</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;So shey&quot;,
  &quot;product_variant&quot;: &quot;SS ce rey Al&quot;,
  &quot;product_family&quot;: &quot;water&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;1 L&quot;,
  &quot;best_catalog_match&quot;: &quot;water&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a plastic bottle with a label that includes the word &#x27;organic&#x27; and &#x27;sparkling water&#x27;, suggesting it is a water product. The OCR text appears to be partially obscured but includes &#x27;So shey SS ce rey Al&#x27;, which might be a brand name or product variant.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> Based on the provided rules and vision model output, here&#x27;s the normalized JSON:

```json
{
  &quot;brand&quot;: &quot;So shey&quot;,
  &quot;product_variant&quot;: &quot;SS ce rey Al&quot;,
  &quot;product_family&quot;: &quot;sparkling water&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;1 L&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: [
    &quot;The image shows a plastic bottle with a label that includes the word &#x27;organic&#x27; and &#x27;sparkling water&#x27;, suggesting it is a water product.&quot;,
    &quot;OCR text appears to be partially obscured but includes &#x27;So shey SS ce rey Al&#x27;, which might be a brand name or product variant.&quot;
  ]
}
```</pre>
</details>

## 33. hires_20260321-112059_bottle_0.97.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112059_bottle_0.97.jpg" alt="hires_20260321-112059_bottle_0.97.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112059_bottle_0.97.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Mali Unsweetened, coffee creamer, 28 FL OZ (1.75 PT/1023 ml) bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Mali</td></tr>
<tr><th align='left'>Product</th><td>Mali Unsweetened</td></tr>
<tr><th align='left'>Variant</th><td>Unsweetened</td></tr>
<tr><th align='left'>Category</th><td>coffee creamer</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>28 FL OZ (1.75 PT/1023 ml) bottle</td></tr>
<tr><th align='left'>Size</th><td>28 FL OZ (1.75 PT/1023 ml)</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>se ie = a ORGANIC @ Ss</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot90</td></tr>
<tr><th align='left'>OCR Size</th><td>28 FL OZ (1.75 PT/1023 ml)</td></tr>
<tr><th align='left'>VLM Brand</th><td>Mali</td></tr>
<tr><th align='left'>VLM Variant</th><td>Unsweetened</td></tr>
<tr><th align='left'>VLM Family</th><td>coffee creamer</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Mali</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Unsweetened</td></tr>
<tr><th align='left'>Resolver Family</th><td>coffee creamer</td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Mali&quot;,
  &quot;product_variant&quot;: &quot;Unsweetened&quot;,
  &quot;product_family&quot;: &quot;coffee creamer&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;28 FL OZ (1.75 PT/1023 ml)&quot;,
  &quot;size_text&quot;: &quot;28 FL OZ (1.75 PT/1023 ml)&quot;,
  &quot;best_catalog_match&quot;: &quot;coffee creamer&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The product is organic and unsweetened, which is typical for coffee creamers.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Mali&quot;,
  &quot;product_variant&quot;: &quot;Unsweetened&quot;,
  &quot;product_family&quot;: &quot;coffee creamer&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;28 FL OZ (1.75 PT/1023 ml)&quot;,
  &quot;size_text&quot;: &quot;28 FL OZ (1.75 PT/1023 ml)&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}</pre>
</details>

## 34. hires_20260321-112059_can_0.94.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112059_can_0.94.jpg" alt="hires_20260321-112059_can_0.94.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112059_can_0.94.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>nothing</td></tr>
<tr><th align='left'>Display Name</th><td>can</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>can</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>aN aay</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot90</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td></td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>The text is not clear enough to identify the brand, product variant, or product family.</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a can with a yellow label, but the text is not clear enough to identify the brand, product variant, or product family. The shape suggests it is a can.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [&quot;The text is not clear enough to identify the brand, product variant, or product family.&quot;]
}</pre>
</details>

## 35. hires_20260321-112100_bottle_0.79.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112100_bottle_0.79.jpg" alt="hires_20260321-112100_bottle_0.79.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112100_bottle_0.79.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Deer Park Sparkling Water, water, 16.9 fl oz bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Deer Park</td></tr>
<tr><th align='left'>Product</th><td>Deer Park Sparkling Water</td></tr>
<tr><th align='left'>Variant</th><td>Sparkling Water</td></tr>
<tr><th align='left'>Category</th><td>water</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>16.9 fl oz bottle</td></tr>
<tr><th align='left'>Size</th><td>16.9 fl oz</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>i a vanaLagn JINVD N\t a Nd cC</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot270</td></tr>
<tr><th align='left'>OCR Size</th><td>16.9 fl oz</td></tr>
<tr><th align='left'>VLM Brand</th><td>Deer Park</td></tr>
<tr><th align='left'>VLM Variant</th><td>Sparkling Water</td></tr>
<tr><th align='left'>VLM Family</th><td>water</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Deer Park</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Sparkling Water</td></tr>
<tr><th align='left'>Resolver Family</th><td>water</td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Deer Park&quot;,
  &quot;product_variant&quot;: &quot;Sparkling Water&quot;,
  &quot;product_family&quot;: &quot;water&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;16.9 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;Deer Park Sparkling Water&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;text&quot;],
  &quot;notes&quot;: &quot;The image shows a plastic bottle with a label that includes the brand name &#x27;Deer Park&#x27; and the word &#x27;Sparkling Water&#x27;. The OCR text appears to be partially obscured and not fully legible, but the visible text aligns with the product description.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Deer Park&quot;,
  &quot;product_variant&quot;: &quot;Sparkling Water&quot;,
  &quot;product_family&quot;: &quot;water&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;16.9 fl oz&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}</pre>
</details>

## 36. hires_20260321-112100_bottle_0.96.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112100_bottle_0.96.jpg" alt="hires_20260321-112100_bottle_0.96.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112100_bottle_0.96.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Cashew UNSWEETENED, milk alternative, 28 FL OZ (1.75 PT) (828 mL) bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Cashew</td></tr>
<tr><th align='left'>Product</th><td>Cashew UNSWEETENED</td></tr>
<tr><th align='left'>Variant</th><td>UNSWEETENED</td></tr>
<tr><th align='left'>Category</th><td>milk alternative</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>28 FL OZ (1.75 PT) (828 mL) bottle</td></tr>
<tr><th align='left'>Size</th><td>28 FL OZ (1.75 PT) (828 mL)</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>e: xe ORGANIC</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot90</td></tr>
<tr><th align='left'>OCR Size</th><td>28 FL OZ (1.75 PT) (828 mL)</td></tr>
<tr><th align='left'>VLM Brand</th><td>cashew</td></tr>
<tr><th align='left'>VLM Variant</th><td>UNSWEETENED</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Cashew</td></tr>
<tr><th align='left'>Resolver Variant</th><td>UNSWEETENED</td></tr>
<tr><th align='left'>Resolver Family</th><td>milk alternative</td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;cashew&quot;,
  &quot;product_variant&quot;: &quot;UNSWEETENED&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;28 FL OZ (1.75 PT) (828 mL)&quot;,
  &quot;size_text&quot;: &quot;28 FL OZ (1.75 PT) (828 mL)&quot;,
  &quot;best_catalog_match&quot;: &quot;milk&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The product appears to be a dairy product, likely a type of milk or milk alternative, given the &#x27;organic&#x27; and &#x27;unsweetened&#x27; labels.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Cashew&quot;,
  &quot;product_variant&quot;: &quot;UNSWEETENED&quot;,
  &quot;product_family&quot;: &quot;Milk Alternative&quot;,
  &quot;container_type&quot;: &quot;Bottle&quot;,
  &quot;container_spec&quot;: &quot;28 FL OZ (1.75 PT) (828 mL)&quot;,
  &quot;size_text&quot;: &quot;28 FL OZ (1.75 PT) (828 mL)&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}</pre>
</details>

## 37. hires_20260321-112101_bottle_0.97.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112101_bottle_0.97.jpg" alt="hires_20260321-112101_bottle_0.97.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112101_bottle_0.97.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Dolby Rinse &amp; Refresh, body wash, 16 fl oz bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Dolby</td></tr>
<tr><th align='left'>Product</th><td>Dolby Rinse &amp; Refresh</td></tr>
<tr><th align='left'>Variant</th><td>Rinse &amp; Refresh</td></tr>
<tr><th align='left'>Category</th><td>body wash</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>16 fl oz bottle</td></tr>
<tr><th align='left'>Size</th><td>16 fl oz</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>2, © Eo RN ae oO. a ae one Fn ey</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot90</td></tr>
<tr><th align='left'>OCR Size</th><td>16 fl oz</td></tr>
<tr><th align='left'>VLM Brand</th><td>Dolby</td></tr>
<tr><th align='left'>VLM Variant</th><td>Rinse &amp; Refresh</td></tr>
<tr><th align='left'>VLM Family</th><td>body wash</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Dolby</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Rinse &amp; Refresh</td></tr>
<tr><th align='left'>Resolver Family</th><td>body wash</td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Dolby&quot;,
  &quot;product_variant&quot;: &quot;Rinse &amp; Refresh&quot;,
  &quot;product_family&quot;: &quot;body wash&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;squeezable&quot;,
  &quot;size_text&quot;: &quot;16 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;body wash&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;shape&quot;],
  &quot;notes&quot;: &quot;The label indicates it is a body wash product.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> Based on the provided OCR text and the raw vision model output, the JSON output would be:

```json
{
  &quot;brand&quot;: &quot;Dolby&quot;,
  &quot;product_variant&quot;: &quot;Rinse &amp; Refresh&quot;,
  &quot;product_family&quot;: &quot;body wash&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;squeezable&quot;,
  &quot;size_text&quot;: &quot;16 fl oz&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}
```

The vision model output seems to be accurate and there&#x27;s no need for normalization in this case. The OCR text could not be used since it is not legible enough to provide any useful information.</pre>
</details>

## 38. hires_20260321-112101_cup_0.98.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112101_cup_0.98.jpg" alt="hires_20260321-112101_cup_0.98.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112101_cup_0.98.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Daisy Sour Cream, dairy, 3 lbs (1.36kg) tub</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Daisy</td></tr>
<tr><th align='left'>Product</th><td>Daisy Sour Cream</td></tr>
<tr><th align='left'>Variant</th><td>Sour Cream</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>tub</td></tr>
<tr><th align='left'>Package</th><td>3 lbs (1.36kg) tub</td></tr>
<tr><th align='left'>Size</th><td>3 lbs (1.36kg)</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>oe. ay in Ra</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot270</td></tr>
<tr><th align='left'>OCR Size</th><td>3 lbs (1.36kg)</td></tr>
<tr><th align='left'>VLM Brand</th><td>Daisy</td></tr>
<tr><th align='left'>VLM Variant</th><td>Sour Cream</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>tub</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Daisy</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Sour Cream</td></tr>
<tr><th align='left'>Resolver Family</th><td>dairy</td></tr>
<tr><th align='left'>Resolver Container</th><td>tub</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Daisy&quot;,
  &quot;product_variant&quot;: &quot;Sour Cream&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;3 lbs (1.36kg)&quot;,
  &quot;best_catalog_match&quot;: &quot;sour cream tub&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;, &quot;shape&quot;],
  &quot;notes&quot;: &quot;The container is a plastic tub commonly used for storing dairy products like sour cream.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> Based on the provided OCR text and vision model output, here&#x27;s the normalized JSON:

```json
{
  &quot;brand&quot;: &quot;Daisy&quot;,
  &quot;product_variant&quot;: &quot;Sour Cream&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;3 lbs (1.36kg)&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}
```

In this case, the OCR and vision model output are clear, so no normalizations were needed for the brand. The product variant and family, container type, and container spec are all provided by the vision model output. The size text is taken directly from the OCR text. Since there&#x27;s no noise or ambiguity in the data, the reasons field remains empty.</pre>
</details>

## 39. hires_20260321-112102_bottle_0.75.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112102_bottle_0.75.jpg" alt="hires_20260321-112102_bottle_0.75.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112102_bottle_0.75.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>nothing</td></tr>
<tr><th align='left'>Display Name</th><td>tub</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>tub</td></tr>
<tr><th align='left'>Package</th><td>tub</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>rie</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot180</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td></td></tr>
<tr><th align='left'>VLM Container</th><td>tub</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td>tub</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>The OCR text &#x27;rie&#x27; provides no useful information for brand identification.</li>
<li>There is no clear product or specific container information visible in the image.</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a white, rectangular container with a smooth surface, suggesting it could be a tub or a container for a solid product. The OCR text &#x27;rie&#x27; and the shortlist candidates are not applicable as there is no text or specific product information visible.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> Based on the provided OCR text and raw vision model output, there is no clear brand identification. Therefore, we will set the `brand` field to an empty string. The `container_type` is identified as a &#x27;tub&#x27; from the vision model output. Here&#x27;s the JSON:

```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [
    &quot;The OCR text &#x27;rie&#x27; provides no useful information for brand identification.&quot;,
    &quot;There is no clear product or specific container information visible in the image.&quot;
  ]
}
```</pre>
</details>

## 40. hires_20260321-112102_bottle_0.96.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112102_bottle_0.96.jpg" alt="hires_20260321-112102_bottle_0.96.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112102_bottle_0.96.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Nature&#x27;s Promise Spring Water, water, can</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Nature&#x27;s Promise</td></tr>
<tr><th align='left'>Product</th><td>Nature&#x27;s Promise Spring Water</td></tr>
<tr><th align='left'>Variant</th><td>Spring Water</td></tr>
<tr><th align='left'>Category</th><td>water</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>can</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>Ay oa ¥ fw ee) - rO ey ye) Ve »§ \ ef Ne</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot180</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Nature&#x27;s Promise</td></tr>
<tr><th align='left'>VLM Variant</th><td>Spring Water</td></tr>
<tr><th align='left'>VLM Family</th><td>water</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Nature&#x27;s Promise</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Spring Water</td></tr>
<tr><th align='left'>Resolver Family</th><td>water</td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Nature&#x27;s Promise&quot;,
  &quot;product_variant&quot;: &quot;Spring Water&quot;,
  &quot;product_family&quot;: &quot;water&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;recyclable&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;water&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a can with a label indicating &#x27;Spring Water&#x27; and &#x27;Nature&#x27;s Promise&#x27;. The presence of a recycling symbol suggests it is recyclable.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Nature&#x27;s Promise&quot;,
  &quot;product_variant&quot;: &quot;Spring Water&quot;,
  &quot;product_family&quot;: &quot;water&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;recyclable&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}</pre>
</details>

## 41. hires_20260321-112102_bottle_0.97.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112102_bottle_0.97.jpg" alt="hires_20260321-112102_bottle_0.97.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112102_bottle_0.97.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Downy Fabric Fresh, fabric softener, 1.5L bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Downy</td></tr>
<tr><th align='left'>Product</th><td>Downy Fabric Fresh</td></tr>
<tr><th align='left'>Variant</th><td>Fabric Fresh</td></tr>
<tr><th align='left'>Category</th><td>fabric softener</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>1.5L bottle</td></tr>
<tr><th align='left'>Size</th><td>1.5L</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>/] io? ] Se Riga nS a, ies Ppa aS BOS aay Soa CG re. ao yy 3 xs a ah</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot270</td></tr>
<tr><th align='left'>OCR Size</th><td>1.5L</td></tr>
<tr><th align='left'>VLM Brand</th><td>Downy</td></tr>
<tr><th align='left'>VLM Variant</th><td>Fabric Fresh</td></tr>
<tr><th align='left'>VLM Family</th><td>fabric softener</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Downy</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Fabric Fresh</td></tr>
<tr><th align='left'>Resolver Family</th><td>fabric softener</td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Downy&quot;,
  &quot;product_variant&quot;: &quot;Fabric Fresh&quot;,
  &quot;product_family&quot;: &quot;fabric softener&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;squeeze bottle&quot;,
  &quot;size_text&quot;: &quot;1.5L&quot;,
  &quot;best_catalog_match&quot;: &quot;Downy Fabric Fresh&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;, &quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a bottle with a label indicating it is a fabric softener, likely Downy brand, with a squeeze bottle design and a size of 1.5L.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Downy&quot;,
  &quot;product_variant&quot;: &quot;Fabric Fresh&quot;,
  &quot;product_family&quot;: &quot;fabric softener&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;squeeze bottle&quot;,
  &quot;size_text&quot;: &quot;1.5L&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}</pre>
</details>

## 42. hires_20260321-112102_cup_0.98.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112102_cup_0.98.jpg" alt="hires_20260321-112102_cup_0.98.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112102_cup_0.98.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Daisy Sour Cream, dairy, 3 lbs (1.36kg) tub</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Daisy</td></tr>
<tr><th align='left'>Product</th><td>Daisy Sour Cream</td></tr>
<tr><th align='left'>Variant</th><td>Sour Cream</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>tub</td></tr>
<tr><th align='left'>Package</th><td>3 lbs (1.36kg) tub</td></tr>
<tr><th align='left'>Size</th><td>3 lbs (1.36kg)</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>p Ky? Ry oO ey”</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>3 lbs (1.36kg)</td></tr>
<tr><th align='left'>VLM Brand</th><td>Daisy</td></tr>
<tr><th align='left'>VLM Variant</th><td>Sour Cream</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>tub</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Daisy</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Sour Cream</td></tr>
<tr><th align='left'>Resolver Family</th><td>dairy</td></tr>
<tr><th align='left'>Resolver Container</th><td>tub</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Daisy&quot;,
  &quot;product_variant&quot;: &quot;Sour Cream&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;3 lbs (1.36kg)&quot;,
  &quot;size_text&quot;: &quot;3 lbs (1.36kg)&quot;,
  &quot;best_catalog_match&quot;: &quot;sour cream&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The container is a tub, commonly used for dairy products like sour cream.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> Based on the given OCR text and raw vision model output, here&#x27;s the JSON response with normalized brand name:

```json
{
  &quot;brand&quot;: &quot;Daisy&quot;,
  &quot;product_variant&quot;: &quot;Sour Cream&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;3 lbs (1.36kg)&quot;,
  &quot;size_text&quot;: &quot;3 lbs (1.36kg)&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}
```

In this case, the brand name &quot;Daisy&quot; is not subject to normalization since it&#x27;s already a well-known brand in the dairy industry.</pre>
</details>

## 43. hires_20260321-112103_bottle_0.96.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112103_bottle_0.96.jpg" alt="hires_20260321-112103_bottle_0.96.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112103_bottle_0.96.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Acti Strawberry, dairy, 1.5 L bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Acti</td></tr>
<tr><th align='left'>Product</th><td>Acti Strawberry</td></tr>
<tr><th align='left'>Variant</th><td>Strawberry</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>1.5 L bottle</td></tr>
<tr><th align='left'>Size</th><td>1.5 L</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>A oS een</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot90</td></tr>
<tr><th align='left'>OCR Size</th><td>1.5 L</td></tr>
<tr><th align='left'>VLM Brand</th><td>Acti</td></tr>
<tr><th align='left'>VLM Variant</th><td>Strawberry</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Acti</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Strawberry</td></tr>
<tr><th align='left'>Resolver Family</th><td>dairy</td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Acti&quot;,
  &quot;product_variant&quot;: &quot;Strawberry&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;squeeze bottle&quot;,
  &quot;size_text&quot;: &quot;1.5 L&quot;,
  &quot;best_catalog_match&quot;: &quot;Acti Low Fat Yogurt&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image is cropped and the text is partially obscured, but the brand and product type are identifiable.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Acti&quot;,
  &quot;product_variant&quot;: &quot;Strawberry&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;squeeze bottle&quot;,
  &quot;size_text&quot;: &quot;1.5 L&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}</pre>
</details>

## 44. hires_20260321-112103_bottle_0.97.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112103_bottle_0.97.jpg" alt="hires_20260321-112103_bottle_0.97.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112103_bottle_0.97.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Nature&#x27;s Promise Spring Water, water, 12 FL OZ (355ml) can</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Nature&#x27;s Promise</td></tr>
<tr><th align='left'>Product</th><td>Nature&#x27;s Promise Spring Water</td></tr>
<tr><th align='left'>Variant</th><td>Spring Water</td></tr>
<tr><th align='left'>Category</th><td>water</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>12 FL OZ (355ml) can</td></tr>
<tr><th align='left'>Size</th><td>12 FL OZ (355ml)</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>iy AQ Nor Spring Water &quot; 0 i ae</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot90</td></tr>
<tr><th align='left'>OCR Size</th><td>12 FL OZ (355ml)</td></tr>
<tr><th align='left'>VLM Brand</th><td>Nature&#x27;s Promise</td></tr>
<tr><th align='left'>VLM Variant</th><td>Spring Water</td></tr>
<tr><th align='left'>VLM Family</th><td>water</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Nature&#x27;s Promise</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Spring Water</td></tr>
<tr><th align='left'>Resolver Family</th><td>water</td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Nature&#x27;s Promise&quot;,
  &quot;product_variant&quot;: &quot;Spring Water&quot;,
  &quot;product_family&quot;: &quot;water&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;12 FL OZ (355ml)&quot;,
  &quot;size_text&quot;: &quot;12 FL OZ (355ml)&quot;,
  &quot;best_catalog_match&quot;: &quot;water&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a can with a label indicating it is spring water from the brand &#x27;Nature&#x27;s Promise&#x27;. The OCR text and logo are consistent with the product description.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Nature&#x27;s Promise&quot;,
  &quot;product_variant&quot;: &quot;Spring Water&quot;,
  &quot;product_family&quot;: &quot;water&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;12 FL OZ (355ml)&quot;,
  &quot;size_text&quot;: &quot;12 FL OZ (355ml)&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}</pre>
</details>

## 45. hires_20260321-112103_can_0.94.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112103_can_0.94.jpg" alt="hires_20260321-112103_can_0.94.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112103_can_0.94.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Limoncello, sparkling water, 0.5L can</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Limoncello</td></tr>
<tr><th align='left'>Product</th><td>Limoncello</td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td>sparkling water</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>0.5L can</td></tr>
<tr><th align='left'>Size</th><td>0.5L</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>, &gt; r F. ‘At a2 im “ ¢ ¥</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot180</td></tr>
<tr><th align='left'>OCR Size</th><td>0.5L</td></tr>
<tr><th align='left'>VLM Brand</th><td>Limoncello</td></tr>
<tr><th align='left'>VLM Variant</th><td>Sparkling Water</td></tr>
<tr><th align='left'>VLM Family</th><td>sparkling water</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Limoncello</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Sparkling Water</td></tr>
<tr><th align='left'>Resolver Family</th><td>sparkling water</td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Limoncello&quot;,
  &quot;product_variant&quot;: &quot;Sparkling Water&quot;,
  &quot;product_family&quot;: &quot;sparkling water&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;0.5L&quot;,
  &quot;best_catalog_match&quot;: &quot;Limoncello Sparkling Water&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The can is yellow with a lemon and lime design, indicating it is a lemon-flavored sparkling water.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Limoncello&quot;,
  &quot;product_variant&quot;: &quot;Sparkling Water&quot;,
  &quot;product_family&quot;: &quot;sparkling water&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;0.5L&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}</pre>
</details>

## 46. hires_20260321-112103_cup_0.92.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112103_cup_0.92.jpg" alt="hires_20260321-112103_cup_0.92.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112103_cup_0.92.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>nothing</td></tr>
<tr><th align='left'>Display Name</th><td>bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>bottle</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td></td></tr>
<tr><th align='left'>OCR Engine</th><td>none</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td></td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>No visible branding or identifying features</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a circular, flat, and thin object that resembles the top of a bottle cap or a lid, possibly from a plastic bottle. There is no visible branding, text, or other identifying features to determine the product family or variant.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> Based on the provided raw vision model output, since there&#x27;s no visible branding or identifying features, I&#x27;ll set `brand` to an empty string and confirm that it&#x27;s a bottle (`container_type`). Since the OCR text is nonexistent, I won&#x27;t fill in the `size_text`. The following JSON represents the normalized output:

```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [&quot;No visible branding or identifying features&quot;]
}
```</pre>
</details>

## 47. hires_20260321-112104_bottle_0.90.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112104_bottle_0.90.jpg" alt="hires_20260321-112104_bottle_0.90.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112104_bottle_0.90.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Daisy 2% Milkfat, dairy, 13g Protein tub</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Daisy</td></tr>
<tr><th align='left'>Product</th><td>Daisy 2% Milkfat</td></tr>
<tr><th align='left'>Variant</th><td>2% Milkfat</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>tub</td></tr>
<tr><th align='left'>Package</th><td>13g Protein tub</td></tr>
<tr><th align='left'>Size</th><td>13g Protein</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>Maas Cy J ~€ CO yy aoe Ly apg One oy YMip lary</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot270</td></tr>
<tr><th align='left'>OCR Size</th><td>13g Protein</td></tr>
<tr><th align='left'>VLM Brand</th><td>Daisy</td></tr>
<tr><th align='left'>VLM Variant</th><td>2% Milkfat</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>tub</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Daisy</td></tr>
<tr><th align='left'>Resolver Variant</th><td>2% Milkfat</td></tr>
<tr><th align='left'>Resolver Family</th><td>dairy</td></tr>
<tr><th align='left'>Resolver Container</th><td>tub</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Daisy&quot;,
  &quot;product_variant&quot;: &quot;2% Milkfat&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;small&quot;,
  &quot;size_text&quot;: &quot;13g Protein&quot;,
  &quot;best_catalog_match&quot;: &quot;cottage cheese&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a container of Daisy brand cottage cheese with a focus on its low-fat content and protein content.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> Based on the provided OCR text and the vision model output, here is the normalized JSON:

```json
{
  &quot;brand&quot;: &quot;Daisy&quot;,
  &quot;product_variant&quot;: &quot;2% Milkfat&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;small&quot;,
  &quot;size_text&quot;: &quot;13g Protein&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}
```

In this case, there was no need for any additional normalization since the OCR text and vision model output are in alignment. The brand name, Daisy, is a recognized consumer-facing name. Also, the product category and container type are specific, so they do not violate the provided rules.</pre>
</details>

## 48. hires_20260321-112104_bottle_0.95.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112104_bottle_0.95.jpg" alt="hires_20260321-112104_bottle_0.95.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112104_bottle_0.95.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>nothing</td></tr>
<tr><th align='left'>Display Name</th><td>fruit flavored drink or condiment squeeze bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td>fruit flavored drink or condiment</td></tr>
<tr><th align='left'>Container</th><td>squeeze bottle</td></tr>
<tr><th align='left'>Package</th><td>squeeze bottle</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>we ai oe . We e ‘a - 7 ae”</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot90</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td></td></tr>
<tr><th align='left'>VLM Container</th><td>squeeze bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td>fruit flavored drink or condiment</td></tr>
<tr><th align='left'>Resolver Container</th><td>squeeze bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>OCR text not available</li>
<li>No specific brand detected</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;squeeze bottle&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a close-up of a squeeze bottle with a label featuring a green and white color scheme and a strawberry image, suggesting it might be a fruit-flavored drink or condiment. However, the OCR text and shortlist candidates are not available, making it difficult to identify the product with certainty.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;Fruit-flavored drink or condiment&quot;,
  &quot;container_type&quot;: &quot;squeeze bottle&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [&quot;OCR text not available&quot;, &quot;No specific brand detected&quot;]
}</pre>
</details>

## 49. hires_20260321-112105_bottle_0.95.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112105_bottle_0.95.jpg" alt="hires_20260321-112105_bottle_0.95.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112105_bottle_0.95.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Coca-Cola Original Taste, soda, 200ml bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Product</th><td>Coca-Cola Original Taste</td></tr>
<tr><th align='left'>Variant</th><td>Original Taste</td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>200ml bottle</td></tr>
<tr><th align='left'>Size</th><td>200ml</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>Fi eh! os, . as ee AE ° J Ps Fs</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot270</td></tr>
<tr><th align='left'>OCR Size</th><td>200ml</td></tr>
<tr><th align='left'>VLM Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>VLM Variant</th><td>Original Taste</td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Original Taste</td></tr>
<tr><th align='left'>Resolver Family</th><td>soda</td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;Original Taste&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;200&quot;,
  &quot;best_catalog_match&quot;: &quot;Coca-Cola 200ml bottle&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a plastic bottle with a red label and the Coca-Cola logo, indicating it is a soda product. The OCR text &#x27;200&#x27; likely refers to the volume of the bottle in milliliters.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;Original Taste&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;200ml&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}</pre>
</details>

## 50. hires_20260321-112105_cup_0.93.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112105_cup_0.93.jpg" alt="hires_20260321-112105_cup_0.93.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112105_cup_0.93.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Daisy Low Fat, dairy, 13g Protein tub</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Daisy</td></tr>
<tr><th align='left'>Product</th><td>Daisy Low Fat</td></tr>
<tr><th align='left'>Variant</th><td>Low Fat</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>tub</td></tr>
<tr><th align='left'>Package</th><td>13g Protein tub</td></tr>
<tr><th align='left'>Size</th><td>13g Protein</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>Are Natur, al lige ne 4 este ah 4 yp ‘ater y. mloie 0, lar: ee &gt; Yip 6 Oy, “Sas</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot270</td></tr>
<tr><th align='left'>OCR Size</th><td>13g Protein</td></tr>
<tr><th align='left'>VLM Brand</th><td>Dals</td></tr>
<tr><th align='left'>VLM Variant</th><td>Low Fat</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>tub</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Daisy</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Low Fat</td></tr>
<tr><th align='left'>Resolver Family</th><td>dairy</td></tr>
<tr><th align='left'>Resolver Container</th><td>tub</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>The vision model output suggests the brand name is Dals, but it seems more likely that it&#x27;s a typo and the correct brand is Daisy.</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Dals&quot;,
  &quot;product_variant&quot;: &quot;Low Fat&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;small curd&quot;,
  &quot;size_text&quot;: &quot;13g Protein&quot;,
  &quot;best_catalog_match&quot;: &quot;cottage cheese&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a tub of cottage cheese with a focus on the &#x27;Low Fat&#x27; and &#x27;Small Curd&#x27; features.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> Based on the provided OCR text and vision model output, here&#x27;s the normalized JSON:

```json
{
  &quot;brand&quot;: &quot;Daisy&quot;,
  &quot;product_variant&quot;: &quot;Low Fat&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;small curd&quot;,
  &quot;size_text&quot;: &quot;13g Protein&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: [&quot;The vision model output suggests the brand name is Dals, but it seems more likely that it&#x27;s a typo and the correct brand is Daisy.&quot;]
}
```</pre>
</details>

## 51. hires_20260321-112106_bottle_0.94.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112106_bottle_0.94.jpg" alt="hires_20260321-112106_bottle_0.94.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112106_bottle_0.94.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Coca-Cola Original Taste, soda, 200 bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Product</th><td>Coca-Cola Original Taste</td></tr>
<tr><th align='left'>Variant</th><td>Original Taste</td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>200 bottle</td></tr>
<tr><th align='left'>Size</th><td>200</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>Sn! ie lo hilt Ny, ors ue De, ~ =</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot270</td></tr>
<tr><th align='left'>OCR Size</th><td>200</td></tr>
<tr><th align='left'>VLM Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>VLM Variant</th><td>Original Taste</td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Original Taste</td></tr>
<tr><th align='left'>Resolver Family</th><td>soda</td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;Original Taste&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;200&quot;,
  &quot;best_catalog_match&quot;: &quot;Coca-Cola 200ml bottle&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a partially consumed Coca-Cola bottle with a red label and a 200ml size indication.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> Based on the given OCR text and vision model output, there seems to be no additional information to extract or normalize. The vision model output already provides the necessary details. Here&#x27;s the JSON response:

```json
{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;Original Taste&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;200&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}
```</pre>
</details>

## 52. hires_20260321-112106_bottle_0.96.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112106_bottle_0.96.jpg" alt="hires_20260321-112106_bottle_0.96.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112106_bottle_0.96.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Coca-Cola 240 Calories, soda, 20 FL OZ (591 ml) bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Product</th><td>Coca-Cola 240 Calories</td></tr>
<tr><th align='left'>Variant</th><td>240 Calories</td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>20 FL OZ (591 ml) bottle</td></tr>
<tr><th align='left'>Size</th><td>20 FL OZ (591 ml)</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>Sa ie ll dla an -_— “Stee, ek | Pe es SG x W</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot270</td></tr>
<tr><th align='left'>OCR Size</th><td>20 FL OZ (591 ml)</td></tr>
<tr><th align='left'>VLM Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>VLM Variant</th><td>240 Calories</td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Resolver Variant</th><td>240 Calories</td></tr>
<tr><th align='left'>Resolver Family</th><td>soda</td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;240 Calories&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;500 ml&quot;,
  &quot;size_text&quot;: &quot;20 FL OZ (591 ml)&quot;,
  &quot;best_catalog_match&quot;: &quot;Coca-Cola&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;, &quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a clear plastic bottle with a red label, which is characteristic of Coca-Cola bottles. The label includes nutritional facts and recycling information, which is typical for soft drink packaging.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;240 Calories&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;500 ml&quot;,
  &quot;size_text&quot;: &quot;20 FL OZ (591 ml)&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}</pre>
</details>

## 53. hires_20260321-112106_cup_0.91.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112106_cup_0.91.jpg" alt="hires_20260321-112106_cup_0.91.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112106_cup_0.91.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>nothing</td></tr>
<tr><th align='left'>Display Name</th><td>Coca-Cola, beverages, cup</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Product</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td>beverages</td></tr>
<tr><th align='left'>Container</th><td>cup</td></tr>
<tr><th align='left'>Package</th><td>cup</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td></td></tr>
<tr><th align='left'>OCR Engine</th><td>none</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td></td></tr>
<tr><th align='left'>VLM Container</th><td>cup</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td>beverages</td></tr>
<tr><th align='left'>Resolver Container</th><td>cup</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>The image shows a partial Coca-Cola can in the background.</li>
<li>The vision model output indicates that a plastic cup is present.</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;cup&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a white plastic cup lid, likely from a fast-food meal, with a Coca-Cola can partially visible in the background. The lid is circular and appears to be designed for a disposable cup.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> Based on the provided raw vision model output and no OCR text, I&#x27;ll fill in the schema with the most likely values:

```json
{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;Beverages&quot;,
  &quot;container_type&quot;: &quot;cup&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [
    &quot;The image shows a partial Coca-Cola can in the background.&quot;,
    &quot;The vision model output indicates that a plastic cup is present.&quot;
  ]
}
```</pre>
</details>

## 54. hires_20260321-112107_bottle_0.75.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112107_bottle_0.75.jpg" alt="hires_20260321-112107_bottle_0.75.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112107_bottle_0.75.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>PepsiCo Diet, soda, 16.9 fl oz bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>PepsiCo</td></tr>
<tr><th align='left'>Product</th><td>PepsiCo Diet</td></tr>
<tr><th align='left'>Variant</th><td>Diet</td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>16.9 fl oz bottle</td></tr>
<tr><th align='left'>Size</th><td>16.9 fl oz</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>wi 3IN 3194934 ie I), ys y/ -</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot180</td></tr>
<tr><th align='left'>OCR Size</th><td>16.9 fl oz</td></tr>
<tr><th align='left'>VLM Brand</th><td>Diet Pepsi</td></tr>
<tr><th align='left'>VLM Variant</th><td>Diet</td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>PepsiCo</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Diet</td></tr>
<tr><th align='left'>Resolver Family</th><td>soda</td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>The vision model output indicates &#x27;Diet Pepsi&#x27; as the brand.</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Diet Pepsi&quot;,
  &quot;product_variant&quot;: &quot;Diet&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;500 ml&quot;,
  &quot;size_text&quot;: &quot;16.9 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;Diet Pepsi 500 ml bottle&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a partially crushed Diet Pepsi bottle with a label that includes the text &#x27;RECYCLE ME&#x27; and &#x27;SEE YOU AGAIN SOON!&#x27; indicating it is a recyclable container.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;PepsiCo&quot;,
  &quot;product_variant&quot;: &quot;Diet&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;500 ml&quot;,
  &quot;size_text&quot;: &quot;16.9 fl oz&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: [&quot;The vision model output indicates &#x27;Diet Pepsi&#x27; as the brand.&quot;]
}</pre>
</details>

## 55. hires_20260321-112107_bottle_0.94.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112107_bottle_0.94.jpg" alt="hires_20260321-112107_bottle_0.94.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112107_bottle_0.94.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Coca-Cola 500ml, soda, 500ml bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Product</th><td>Coca-Cola 500ml</td></tr>
<tr><th align='left'>Variant</th><td>500ml</td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>500ml bottle</td></tr>
<tr><th align='left'>Size</th><td>500ml</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>—— RECYCLE ME ie ra i</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>500ml</td></tr>
<tr><th align='left'>VLM Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>VLM Variant</th><td>500ml</td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td>soda</td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;500ml&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;500ml&quot;,
  &quot;size_text&quot;: &quot;500ml&quot;,
  &quot;best_catalog_match&quot;: &quot;Coca-Cola 500ml bottle&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a Coca-Cola bottle with a &#x27;Recycle Me&#x27; label, indicating it is a recyclable container.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;500ml&quot;,
  &quot;size_text&quot;: &quot;500ml&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}</pre>
</details>

## 56. hires_20260321-112107_bottle_0.95.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112107_bottle_0.95.jpg" alt="hires_20260321-112107_bottle_0.95.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112107_bottle_0.95.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Coca-Cola Regular, soda, 20 fl oz bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Product</th><td>Coca-Cola Regular</td></tr>
<tr><th align='left'>Variant</th><td>Regular</td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>20 fl oz bottle</td></tr>
<tr><th align='left'>Size</th><td>20 fl oz</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>fi) Facts ‘i TAs} a hat soi) om] ed 1) FE: a)</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot90</td></tr>
<tr><th align='left'>OCR Size</th><td>20 fl oz</td></tr>
<tr><th align='left'>VLM Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>VLM Variant</th><td>Regular</td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Regular</td></tr>
<tr><th align='left'>Resolver Family</th><td>soda</td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;Regular&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;clear plastic&quot;,
  &quot;size_text&quot;: &quot;20 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;Coca-Cola 20 fl oz bottle&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a clear plastic bottle with a red label featuring the Coca-Cola logo and nutritional facts. The size is indicated as 20 fl oz.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;Regular&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;clear plastic&quot;,
  &quot;size_text&quot;: &quot;20 fl oz&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}</pre>
</details>

## 57. hires_20260321-112108_bottle_0.93.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112108_bottle_0.93.jpg" alt="hires_20260321-112108_bottle_0.93.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112108_bottle_0.93.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Coca-Cola Diet, soda, 12 FL OZ (355 mL) can</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Product</th><td>Coca-Cola Diet</td></tr>
<tr><th align='left'>Variant</th><td>Diet</td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>12 FL OZ (355 mL) can</td></tr>
<tr><th align='left'>Size</th><td>12 FL OZ (355 mL)</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>= er _ Ss n res eS Gi aS wisn = 3 ox —— fz 22a =e</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>12 FL OZ (355 mL)</td></tr>
<tr><th align='left'>VLM Brand</th><td>Diet Coke</td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Diet</td></tr>
<tr><th align='left'>Resolver Family</th><td>soda</td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Diet Coke&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;355 mL&quot;,
  &quot;size_text&quot;: &quot;12 FL OZ (355 mL)&quot;,
  &quot;best_catalog_match&quot;: &quot;Diet Coke can&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a can of Diet Coke with the brand name and size clearly visible.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;Diet&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;355 mL&quot;,
  &quot;size_text&quot;: &quot;12 FL OZ (355 mL)&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}</pre>
</details>

## 58. hires_20260321-112108_bottle_0.95.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112108_bottle_0.95.jpg" alt="hires_20260321-112108_bottle_0.95.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112108_bottle_0.95.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Coca-Cola, soda, 200ml bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Product</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>200ml bottle</td></tr>
<tr><th align='left'>Size</th><td>200ml</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>=&gt; ray Estoy = Sr Con ey oY Oa iv cf i a,</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot270</td></tr>
<tr><th align='left'>OCR Size</th><td>200ml</td></tr>
<tr><th align='left'>VLM Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>VLM Variant</th><td>200</td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Resolver Variant</th><td>200</td></tr>
<tr><th align='left'>Resolver Family</th><td>soda</td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;200&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;200&quot;,
  &quot;best_catalog_match&quot;: &quot;Coca-Cola 200ml bottle&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;, &quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a plastic bottle with a red label, which is characteristic of Coca-Cola bottles. The OCR text includes the number &#x27;200&#x27;, which likely refers to the volume of the bottle in milliliters.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;200&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;200ml&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}</pre>
</details>

## 59. hires_20260321-112108_bottle_0.97.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112108_bottle_0.97.jpg" alt="hires_20260321-112108_bottle_0.97.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112108_bottle_0.97.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Merv Original, dairy, 16 fl oz (1 pint) bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Merv</td></tr>
<tr><th align='left'>Product</th><td>Merv Original</td></tr>
<tr><th align='left'>Variant</th><td>Original</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>16 fl oz (1 pint) bottle</td></tr>
<tr><th align='left'>Size</th><td>16 fl oz (1 pint)</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>oF wy ce. # q a By? RY) or &lt;&gt; ~ Qr ee ee</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot270</td></tr>
<tr><th align='left'>OCR Size</th><td>16 fl oz (1 pint)</td></tr>
<tr><th align='left'>VLM Brand</th><td>Merve</td></tr>
<tr><th align='left'>VLM Variant</th><td>Original</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Merv</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Original</td></tr>
<tr><th align='left'>Resolver Family</th><td>dairy</td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Merve&quot;,
  &quot;product_variant&quot;: &quot;Original&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;473ml&quot;,
  &quot;size_text&quot;: &quot;16 fl oz (1 pint)&quot;,
  &quot;best_catalog_match&quot;: &quot;yogurt drink&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The label indicates it is a yogurt drink, and the container type and size are consistent with a yogurt drink bottle.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Merv&quot;,
  &quot;product_variant&quot;: &quot;Original&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;473ml&quot;,
  &quot;size_text&quot;: &quot;16 fl oz (1 pint)&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}</pre>
</details>

## 60. hires_20260321-112108_cup_0.97.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112108_cup_0.97.jpg" alt="hires_20260321-112108_cup_0.97.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112108_cup_0.97.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>weak</td></tr>
<tr><th align='left'>Display Name</th><td>dairy tub</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>tub</td></tr>
<tr><th align='left'>Package</th><td>whole milk greek yogurt</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>AK it 4 st Y At % i | ih es &lt;n y tt</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>tub</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td>dairy</td></tr>
<tr><th align='left'>Resolver Container</th><td>tub</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>The OCR text is partially obscured and not fully legible.</li>
<li>The vision model relied on the container shape and context to determine it&#x27;s a yogurt container.</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;whole milk greek yogurt&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;whole milk greek yogurt&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;shape&quot;, &quot;text&quot;],
  &quot;notes&quot;: &quot;The image shows a container with text indicating it is whole milk Greek yogurt. The OCR text appears to be partially obscured and not fully legible, but the shape and context suggest it is a yogurt container.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> Based on the provided rules and vision model output, here&#x27;s the normalized JSON output:

```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;whole milk greek yogurt&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: [
    &quot;The OCR text is partially obscured and not fully legible.&quot;,
    &quot;The vision model relied on the container shape and context to determine it&#x27;s a yogurt container.&quot;
  ]
}
```

In this case, since the brand was not identified with certainty from both OCR and the vision model output, it remains empty. The reasons for these conclusions are included in the `reasons` field to help with further analysis or human review if needed.</pre>
</details>

## 61. hires_20260321-112109_bottle_0.93.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112109_bottle_0.93.jpg" alt="hires_20260321-112109_bottle_0.93.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112109_bottle_0.93.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Gatorade Zero, sports drink, 20 fl oz bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Gatorade</td></tr>
<tr><th align='left'>Product</th><td>Gatorade Zero</td></tr>
<tr><th align='left'>Variant</th><td>Zero</td></tr>
<tr><th align='left'>Category</th><td>sports drink</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>20 fl oz bottle</td></tr>
<tr><th align='left'>Size</th><td>20 fl oz</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>rd Lea i ra pincers</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot90</td></tr>
<tr><th align='left'>OCR Size</th><td>20 fl oz</td></tr>
<tr><th align='left'>VLM Brand</th><td>Gatorade</td></tr>
<tr><th align='left'>VLM Variant</th><td>Zero</td></tr>
<tr><th align='left'>VLM Family</th><td>sports drink</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Gatorade</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Zero</td></tr>
<tr><th align='left'>Resolver Family</th><td>sports drink</td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Gatorade&quot;,
  &quot;product_variant&quot;: &quot;Zero&quot;,
  &quot;product_family&quot;: &quot;sports drink&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;20 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;Gatorade Zero&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a Gatorade Zero bottle with a label indicating it is a sports drink.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Gatorade&quot;,
  &quot;product_variant&quot;: &quot;Zero&quot;,
  &quot;product_family&quot;: &quot;sports drink&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;20 fl oz&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}</pre>
</details>

## 62. hires_20260321-112109_bottle_0.95.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112109_bottle_0.95.jpg" alt="hires_20260321-112109_bottle_0.95.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112109_bottle_0.95.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>nothing</td></tr>
<tr><th align='left'>Display Name</th><td>5g jar</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>jar</td></tr>
<tr><th align='left'>Package</th><td>5g jar</td></tr>
<tr><th align='left'>Size</th><td>5g</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>BA Nx se cE Eze a sE EZ eS at</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>5g</td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td></td></tr>
<tr><th align='left'>VLM Container</th><td>jar</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td>jar</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>OCR text is not clear and does not provide enough information to identify the product family or variant.</li>
<li>The raw vision model output did not have specific details about the brand, product variant, or product family.</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;jar&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;5g&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a white jar with a label containing text and a barcode. The OCR text is not clear and does not provide enough information to identify the product family or variant. The size is indicated as 5g.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> Based on the provided OCR text and vision model output, here&#x27;s the normalized JSON:

```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;jar&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;5g&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [
    &quot;OCR text is not clear and does not provide enough information to identify the product family or variant.&quot;,
    &quot;The raw vision model output did not have specific details about the brand, product variant, or product family.&quot;
  ]
}
```

This JSON reflects the fact that the OCR text is not clear and does not offer enough information to identify the product or its family. Additionally, the raw vision model output does not contain specific details about the brand, product variant, or product family.</pre>
</details>

## 63. hires_20260321-112109_bottle_0.98.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112109_bottle_0.98.jpg" alt="hires_20260321-112109_bottle_0.98.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112109_bottle_0.98.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>weak</td></tr>
<tr><th align='left'>Display Name</th><td>Low Fat, dairy, 1 gallon jug</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td>Low Fat</td></tr>
<tr><th align='left'>Variant</th><td>Low Fat</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>jug</td></tr>
<tr><th align='left'>Package</th><td>1 gallon jug</td></tr>
<tr><th align='left'>Size</th><td>1 gallon</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>y XN Le</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot180</td></tr>
<tr><th align='left'>OCR Size</th><td>1 gallon</td></tr>
<tr><th align='left'>VLM Brand</th><td>Dairy</td></tr>
<tr><th align='left'>VLM Variant</th><td>Low Fat</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>jug</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td>Low Fat</td></tr>
<tr><th align='left'>Resolver Family</th><td>dairy</td></tr>
<tr><th align='left'>Resolver Container</th><td>jug</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>OCR output did not provide a specific brand name</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Dairy&quot;,
  &quot;product_variant&quot;: &quot;Low Fat&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;jug&quot;,
  &quot;container_spec&quot;: &quot;1% fat&quot;,
  &quot;size_text&quot;: &quot;1 gallon&quot;,
  &quot;best_catalog_match&quot;: &quot;milk&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;shape&quot;],
  &quot;notes&quot;: &quot;The container is a jug typically used for milk, and the label indicates it is low-fat milk.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;Low Fat&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;jug&quot;,
  &quot;container_spec&quot;: &quot;1% fat&quot;,
  &quot;size_text&quot;: &quot;1 gallon&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: [&quot;OCR output did not provide a specific brand name&quot;]
}</pre>
</details>

## 64. hires_20260321-112109_cup_0.89.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112109_cup_0.89.jpg" alt="hires_20260321-112109_cup_0.89.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112109_cup_0.89.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>medium</td></tr>
<tr><th align='left'>Display Name</th><td>Coca-Cola, soda, can</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Product</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>can</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>yan 4 ie yee</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td>soda</td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>Logo and shape evidence</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;Coca-Cola can&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a close-up of a Coca-Cola can with a pull-tab, indicating it is a soda can.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: [&quot;Logo and shape evidence&quot;]
}</pre>
</details>

## 65. hires_20260321-112110_bottle_0.98.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112110_bottle_0.98.jpg" alt="hires_20260321-112110_bottle_0.98.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112110_bottle_0.98.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Coca-Cola Original, soda, 1.5L bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Product</th><td>Coca-Cola Original</td></tr>
<tr><th align='left'>Variant</th><td>Original</td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>1.5L bottle</td></tr>
<tr><th align='left'>Size</th><td>1.5L</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>Bs ead re ea es</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>1.5L</td></tr>
<tr><th align='left'>VLM Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>VLM Variant</th><td>Original</td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Original</td></tr>
<tr><th align='left'>Resolver Family</th><td>soda</td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;Original&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;1.5L&quot;,
  &quot;best_catalog_match&quot;: &quot;1.5L Coca-Cola plastic bottle&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The bottle is empty and has a red label with the Coca-Cola logo and the text &#x27;Original Taste&#x27;. The container type is a plastic bottle, and the size is 1.5L.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;Original&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;1.5L&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}</pre>
</details>

## 66. hires_20260321-112110_can_0.88.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112110_can_0.88.jpg" alt="hires_20260321-112110_can_0.88.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112110_can_0.88.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Coca-Cola, soda, 12 fl oz can</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Product</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>12 fl oz can</td></tr>
<tr><th align='left'>Size</th><td>12 fl oz</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>- s \ Le A . if Bl At Ti 3 Bit] FO a</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot180</td></tr>
<tr><th align='left'>OCR Size</th><td>12 fl oz</td></tr>
<tr><th align='left'>VLM Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>VLM Variant</th><td>140</td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Resolver Variant</th><td>140</td></tr>
<tr><th align='left'>Resolver Family</th><td>soda</td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>OCR text is partially obscured but the vision model was able to identify the brand and container details</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;140&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;12 fl oz&quot;,
  &quot;size_text&quot;: &quot;12 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;Coca-Cola can&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a red can with the Coca-Cola logo and the text &#x27;RECYCLE ME&#x27; and &#x27;12 fl oz&#x27;. The OCR text appears to be partially obscured and not fully legible.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;140&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;12 fl oz&quot;,
  &quot;size_text&quot;: &quot;12 fl oz&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: [&quot;OCR text is partially obscured but the vision model was able to identify the brand and container details&quot;]
}</pre>
</details>

## 67. hires_20260321-112110_can_0.90.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112110_can_0.90.jpg" alt="hires_20260321-112110_can_0.90.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112110_can_0.90.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>medium</td></tr>
<tr><th align='left'>Display Name</th><td>Coca-Cola, soda, can</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Product</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>can</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>beer as 7 X we wv Se</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td>soda</td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>Vision model identified Coca-Cola brand in the image</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;Coca-Cola can&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a red and silver can with the Coca-Cola logo, indicating it is a soda can.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> Based on the provided OCR text and the vision model output, there&#x27;s no brand information in the OCR text. However, the vision model suggests that the brand is &quot;Coca-Cola&quot;. Since the OCR text does not contradict this, we can assume that the product is a Coca-Cola product.

Here&#x27;s the JSON response:

```json
{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: [
    &quot;Vision model identified Coca-Cola brand in the image&quot;
  ]
}
```</pre>
</details>

## 68. hires_20260321-112110_can_0.93.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112110_can_0.93.jpg" alt="hires_20260321-112110_can_0.93.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112110_can_0.93.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>medium</td></tr>
<tr><th align='left'>Display Name</th><td>Coca-Cola, soda, can</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Product</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>can</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>er x \o 0 aN te</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot90</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Coke</td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td>soda</td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Coke&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;Coke can&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;],
  &quot;notes&quot;: &quot;The image shows a close-up of a red Coca-Cola can with the iconic logo visible.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}</pre>
</details>

## 69. hires_20260321-112111_bottle_0.92.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112111_bottle_0.92.jpg" alt="hires_20260321-112111_bottle_0.92.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112111_bottle_0.92.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Coca-Cola 1 Can, soda, 1 Can can</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Product</th><td>Coca-Cola 1 Can</td></tr>
<tr><th align='left'>Variant</th><td>1 Can</td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>1 Can can</td></tr>
<tr><th align='left'>Size</th><td>1 Can</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>Te aeoll “hp Wt wy &#x27; i # Bi iy ny a ‘os a9 rx g be &gt;. A AY «= iq eaonieh mart</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot180</td></tr>
<tr><th align='left'>OCR Size</th><td>1 Can</td></tr>
<tr><th align='left'>VLM Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>VLM Variant</th><td>1 Can</td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Resolver Variant</th><td>1 Can</td></tr>
<tr><th align='left'>Resolver Family</th><td>soda</td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;1 Can&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;140 Calories&quot;,
  &quot;size_text&quot;: &quot;1 Can&quot;,
  &quot;best_catalog_match&quot;: &quot;Coca-Cola&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a can of Coca-Cola with nutritional information and recycling symbols.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> Based on the provided OCR text and the raw vision model output, there seems to be a discrepancy between the OCR output and the vision model output. The vision model output suggests that the brand is &quot;Coca-Cola&quot;, while the OCR text does not provide any clear brand name.

However, for the sake of this exercise, I will assume that the vision model output is correct and return the normalized data based on it:

```JSON
{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;1 Can&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;140 Calories&quot;,
  &quot;size_text&quot;: &quot;1 Can&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}
```

In a real-world scenario, you would want to combine the OCR and vision model outputs to get the most accurate result.</pre>
</details>

## 70. hires_20260321-112111_bottle_0.94.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112111_bottle_0.94.jpg" alt="hires_20260321-112111_bottle_0.94.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112111_bottle_0.94.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Siggi&#x27;s 5% Greek Strained Yogurt, dairy, 32 oz (907g) tub</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Siggi&#x27;s</td></tr>
<tr><th align='left'>Product</th><td>Siggi&#x27;s 5% Greek Strained Yogurt</td></tr>
<tr><th align='left'>Variant</th><td>5% Greek Strained Yogurt</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>tub</td></tr>
<tr><th align='left'>Package</th><td>32 oz (907g) tub</td></tr>
<tr><th align='left'>Size</th><td>32 oz (907g)</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>&gt; se a ps afted™ yy N N FA-YE! S Oral Ss, N</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot270</td></tr>
<tr><th align='left'>OCR Size</th><td>32 oz (907g)</td></tr>
<tr><th align='left'>VLM Brand</th><td>Siggi&#x27;s</td></tr>
<tr><th align='left'>VLM Variant</th><td>5% Greek Strained</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>tub</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Siggi&#x27;s</td></tr>
<tr><th align='left'>Resolver Variant</th><td>5% Greek Strained Yogurt</td></tr>
<tr><th align='left'>Resolver Family</th><td>dairy</td></tr>
<tr><th align='left'>Resolver Container</th><td>tub</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Siggi&#x27;s&quot;,
  &quot;product_variant&quot;: &quot;5% Greek Strained&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;32 oz (907g)&quot;,
  &quot;size_text&quot;: &quot;32 oz (907g)&quot;,
  &quot;best_catalog_match&quot;: &quot;yogurt&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The container is a tub, commonly used for yogurt, and the text on the label confirms it is a Greek yogurt product.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Siggi&#x27;s&quot;,
  &quot;product_variant&quot;: &quot;5% Greek Strained Yogurt&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;32 oz (907g)&quot;,
  &quot;size_text&quot;: &quot;32 oz (907g)&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}</pre>
</details>

## 71. hires_20260321-112111_can_0.87.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112111_can_0.87.jpg" alt="hires_20260321-112111_can_0.87.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112111_can_0.87.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>medium</td></tr>
<tr><th align='left'>Display Name</th><td>Coca-Cola, soda, can</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Product</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>can</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>Ny ty ~ aia</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot270</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td>soda</td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>logo</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;Coca-Cola can&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;],
  &quot;notes&quot;: &quot;The image shows a close-up of a Coca-Cola can with the iconic logo visible.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: [&quot;logo&quot;]
}</pre>
</details>

## 72. hires_20260321-112112_bottle_0.89.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112112_bottle_0.89.jpg" alt="hires_20260321-112112_bottle_0.89.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112112_bottle_0.89.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Siggi&#x27;s Greek Strained Yogurt, dairy, 32 oz (907g) tub</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Siggi&#x27;s</td></tr>
<tr><th align='left'>Product</th><td>Siggi&#x27;s Greek Strained Yogurt</td></tr>
<tr><th align='left'>Variant</th><td>Greek Strained Yogurt</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>tub</td></tr>
<tr><th align='left'>Package</th><td>32 oz (907g) tub</td></tr>
<tr><th align='left'>Size</th><td>32 oz (907g)</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>snp ingest sigh iE { “co, py i} Ly) V/</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>32 oz (907g)</td></tr>
<tr><th align='left'>VLM Brand</th><td>Siggis</td></tr>
<tr><th align='left'>VLM Variant</th><td>Greek Strained</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>tub</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Siggi&#x27;s</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Greek Strained Yogurt</td></tr>
<tr><th align='left'>Resolver Family</th><td>dairy</td></tr>
<tr><th align='left'>Resolver Container</th><td>tub</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Siggis&quot;,
  &quot;product_variant&quot;: &quot;Greek Strained&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;32 oz (907g)&quot;,
  &quot;size_text&quot;: &quot;32 oz (907g)&quot;,
  &quot;best_catalog_match&quot;: &quot;yogurt&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The container is a tub, which is commonly used for yogurt. The text on the container indicates it is a Greek strained yogurt, which is a specific type of yogurt.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Siggi&#x27;s&quot;,
  &quot;product_variant&quot;: &quot;Greek Strained Yogurt&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;32 oz (907g)&quot;,
  &quot;size_text&quot;: &quot;32 oz (907g)&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}</pre>
</details>

## 73. hires_20260321-112121_cup_0.84.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112121_cup_0.84.jpg" alt="hires_20260321-112121_cup_0.84.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112121_cup_0.84.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>San Pellegrino Juices, juice, 12 FL OZ can</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>San Pellegrino</td></tr>
<tr><th align='left'>Product</th><td>San Pellegrino Juices</td></tr>
<tr><th align='left'>Variant</th><td>Juices</td></tr>
<tr><th align='left'>Category</th><td>juice</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>12 FL OZ can</td></tr>
<tr><th align='left'>Size</th><td>12 FL OZ</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>es oy</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>12 FL OZ</td></tr>
<tr><th align='left'>VLM Brand</th><td>Sanp</td></tr>
<tr><th align='left'>VLM Variant</th><td>Juices</td></tr>
<tr><th align='left'>VLM Family</th><td>juice</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>San Pellegrino</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Juices</td></tr>
<tr><th align='left'>Resolver Family</th><td>juice</td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>The raw vision model output indicates the brand name as Sanp, but upon closer examination and considering that it is a common misspelling of San Pellegrino, we will correct it.</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Sanp&quot;,
  &quot;product_variant&quot;: &quot;Juices&quot;,
  &quot;product_family&quot;: &quot;juice&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;recyclable&quot;,
  &quot;size_text&quot;: &quot;12 FL OZ&quot;,
  &quot;best_catalog_match&quot;: &quot;Sanp 12 FL OZ Juice Can&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;, &quot;shape&quot;],
  &quot;notes&quot;: &quot;The image is slightly pixelated, which may affect the OCR accuracy.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;San Pellegrino&quot;,
  &quot;product_variant&quot;: &quot;Juices&quot;,
  &quot;product_family&quot;: &quot;juice&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;recyclable&quot;,
  &quot;size_text&quot;: &quot;12 FL OZ&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: [&quot;The raw vision model output indicates the brand name as Sanp, but upon closer examination and considering that it is a common misspelling of San Pellegrino, we will correct it.&quot;]
}</pre>
</details>

## 74. hires_20260321-112122_cup_0.88.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112122_cup_0.88.jpg" alt="hires_20260321-112122_cup_0.88.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112122_cup_0.88.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>San Pellegrino Life, sparkling water, 500 ML can</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>San Pellegrino</td></tr>
<tr><th align='left'>Product</th><td>San Pellegrino Life</td></tr>
<tr><th align='left'>Variant</th><td>Life</td></tr>
<tr><th align='left'>Category</th><td>sparkling water</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>500 ML can</td></tr>
<tr><th align='left'>Size</th><td>500 ML</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>ie ce Vy i) Y, e \</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot270</td></tr>
<tr><th align='left'>OCR Size</th><td>500 ML</td></tr>
<tr><th align='left'>VLM Brand</th><td>SAN PELLEGRINO</td></tr>
<tr><th align='left'>VLM Variant</th><td>LIFE</td></tr>
<tr><th align='left'>VLM Family</th><td>juice</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>San Pellegrino</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Life</td></tr>
<tr><th align='left'>Resolver Family</th><td>sparkling water</td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;SAN PELLEGRINO&quot;,
  &quot;product_variant&quot;: &quot;LIFE&quot;,
  &quot;product_family&quot;: &quot;juice&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;recyclable&quot;,
  &quot;size_text&quot;: &quot;500 ML&quot;,
  &quot;best_catalog_match&quot;: &quot;san pellegrino sparkling water&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;, &quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a can with branding and text indicating it is a San Pellegrino product, likely a sparkling water or juice variant, given the &#x27;Life&#x27; branding and &#x27;500 ML&#x27; size.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;San Pellegrino&quot;,
  &quot;product_variant&quot;: &quot;Life&quot;,
  &quot;product_family&quot;: &quot;sparkling beverage&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;recyclable&quot;,
  &quot;size_text&quot;: &quot;500 ML&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}</pre>
</details>

## 75. hires_20260321-112122_cup_0.94.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112122_cup_0.94.jpg" alt="hires_20260321-112122_cup_0.94.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112122_cup_0.94.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>nothing</td></tr>
<tr><th align='left'>Display Name</th><td>tub</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>tub</td></tr>
<tr><th align='left'>Package</th><td>tub</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>Ss 4 x % is i?</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot90</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td></td></tr>
<tr><th align='left'>VLM Container</th><td>tub</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td>tub</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>lack of clear branding or product information</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a close-up of a white, rounded container with a green label, which suggests it could be a tub or jar. However, the OCR text and lack of clear branding or product information make it difficult to determine the exact product family or variant.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [&quot;lack of clear branding or product information&quot;]
}</pre>
</details>

## 76. hires_20260321-112123_bottle_0.97.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112123_bottle_0.97.jpg" alt="hires_20260321-112123_bottle_0.97.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112123_bottle_0.97.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Apple &amp; Eve apple juice, juice, 100% bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Apple &amp; Eve</td></tr>
<tr><th align='left'>Product</th><td>Apple &amp; Eve apple juice</td></tr>
<tr><th align='left'>Variant</th><td>apple juice</td></tr>
<tr><th align='left'>Category</th><td>juice</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>100% bottle</td></tr>
<tr><th align='left'>Size</th><td>100%</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>ie uf iy ULE &quot; “lk SS Os Ou SS) Fly vy Fy Wy o I SS -_ AS</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>100%</td></tr>
<tr><th align='left'>VLM Brand</th><td>APPLE &amp; EVE</td></tr>
<tr><th align='left'>VLM Variant</th><td>apple juice</td></tr>
<tr><th align='left'>VLM Family</th><td>juice</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Apple &amp; Eve</td></tr>
<tr><th align='left'>Resolver Variant</th><td>apple juice</td></tr>
<tr><th align='left'>Resolver Family</th><td>juice</td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;APPLE &amp; EVE&quot;,
  &quot;product_variant&quot;: &quot;apple juice&quot;,
  &quot;product_family&quot;: &quot;juice&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;100%&quot;,
  &quot;best_catalog_match&quot;: &quot;apple juice&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;text&quot;, &quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a bottle of Apple &amp; Eve apple juice with a green cap and a label indicating it is 100% apple juice.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> Based on the provided OCR text and vision model output, I will normalize the brand name to its consumer-facing form while maintaining consistency with the provided vision model output:

{
  &quot;brand&quot;: &quot;Apple &amp; Eve&quot;,
  &quot;product_variant&quot;: &quot;apple juice&quot;,
  &quot;product_family&quot;: &quot;juice&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;100%&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}</pre>
</details>

## 77. hires_20260321-112123_can_0.89.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112123_can_0.89.jpg" alt="hires_20260321-112123_can_0.89.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112123_can_0.89.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Lemon, sparkling water, 12 fl oz can</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Lemon</td></tr>
<tr><th align='left'>Product</th><td>Lemon</td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td>sparkling water</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>12 fl oz can</td></tr>
<tr><th align='left'>Size</th><td>12 fl oz</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>ae a \ i? 1Z 333 ee S ag een 5</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot90</td></tr>
<tr><th align='left'>OCR Size</th><td>12 fl oz</td></tr>
<tr><th align='left'>VLM Brand</th><td>Lemon</td></tr>
<tr><th align='left'>VLM Variant</th><td>Sparkling Water</td></tr>
<tr><th align='left'>VLM Family</th><td>sparkling water</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Lemon</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Sparkling Water</td></tr>
<tr><th align='left'>Resolver Family</th><td>sparkling water</td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Lemon&quot;,
  &quot;product_variant&quot;: &quot;Sparkling Water&quot;,
  &quot;product_family&quot;: &quot;sparkling water&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;12 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;Lemon Sparkling Water&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a can with a lemon-themed design and text indicating it is a sparkling water product.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Lemon&quot;,
  &quot;product_variant&quot;: &quot;Sparkling Water&quot;,
  &quot;product_family&quot;: &quot;sparkling water&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;12 fl oz&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}</pre>
</details>

## 78. hires_20260321-112123_thermoform_0.70.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112123_thermoform_0.70.jpg" alt="hires_20260321-112123_thermoform_0.70.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112123_thermoform_0.70.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>nothing</td></tr>
<tr><th align='left'>Display Name</th><td>can</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>can</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>Pigs SS LSA ye len / Sy ~ _itll »</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td></td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>OCR text is not clear and does not provide any identifiable information.</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a can with a coiled wire and a plastic tray, possibly from a food or beverage container. The OCR text is not clear and does not provide any identifiable information.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> Based on the provided rules and the given OCR text and vision model output, the JSON response would be:

```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [&quot;OCR text is not clear and does not provide any identifiable information.&quot;]
}
```
Since the OCR text is not clear and does not provide any identifiable brand or product details, an empty brand name was used to reflect that no canonical consumer-facing name could be determined. The other fields were filled based on the vision model output.</pre>
</details>

## 79. hires_20260321-112124_can_0.93.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112124_can_0.93.jpg" alt="hires_20260321-112124_can_0.93.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112124_can_0.93.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>San Pellegrino Lemon Sparkling Water, sparkling water, 0 CALORIES can</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>San Pellegrino</td></tr>
<tr><th align='left'>Product</th><td>San Pellegrino Lemon Sparkling Water</td></tr>
<tr><th align='left'>Variant</th><td>Lemon Sparkling Water</td></tr>
<tr><th align='left'>Category</th><td>sparkling water</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>0 CALORIES can</td></tr>
<tr><th align='left'>Size</th><td>0 CALORIES</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>wee Ww 5 eal i) 4 os</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot270</td></tr>
<tr><th align='left'>OCR Size</th><td>0 CALORIES</td></tr>
<tr><th align='left'>VLM Brand</th><td>Lemon</td></tr>
<tr><th align='left'>VLM Variant</th><td>Sparkling Water</td></tr>
<tr><th align='left'>VLM Family</th><td>sparkling water</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>San Pellegrino</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Lemon Sparkling Water</td></tr>
<tr><th align='left'>Resolver Family</th><td>sparkling water</td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>The vision model identified &#x27;Lemon&#x27; as the brand, which is a flavor rather than the brand name. However, San Pellegrino is well-known for its lemon-flavored sparkling water.</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Lemon&quot;,
  &quot;product_variant&quot;: &quot;Sparkling Water&quot;,
  &quot;product_family&quot;: &quot;sparkling water&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;0 CALORIES&quot;,
  &quot;best_catalog_match&quot;: &quot;Lemon Sparkling Water&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The can is labeled with &#x27;Sparkling Water&#x27; and &#x27;Lemon&#x27;, indicating it is a lemon-flavored sparkling water. The &#x27;0 CALORIES&#x27; text suggests it is a low-calorie beverage.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> Based on the provided OCR text and the vision model output, the normalized JSON would look like this:

```json
{
  &quot;brand&quot;: &quot;San Pellegrino&quot;,
  &quot;product_variant&quot;: &quot;Lemon Sparkling Water&quot;,
  &quot;product_family&quot;: &quot;sparkling water&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;0 CALORIES&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: [&quot;The vision model identified &#x27;Lemon&#x27; as the brand, which is a flavor rather than the brand name. However, San Pellegrino is well-known for its lemon-flavored sparkling water.&quot;]
}
```

In this case, I have used the vision model output to identify &quot;Lemon&quot; as the initial brand, but it&#x27;s a flavor, not the actual brand name. San Pellegrino is a well-known brand that produces lemon-flavored sparkling water, so I have chosen to use San Pellegrino as the brand name in this instance. The &quot;reasons&quot; field explains why I made this choice.</pre>
</details>

## 80. hires_20260321-112125_bottle_0.82.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112125_bottle_0.82.jpg" alt="hires_20260321-112125_bottle_0.82.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112125_bottle_0.82.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>nothing</td></tr>
<tr><th align='left'>Display Name</th><td>1 Can can</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>1 Can can</td></tr>
<tr><th align='left'>Size</th><td>1 Can</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>act 1 Cn 1D Calorj NAY a) if</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>1 Can</td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td></td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>The brand and product family are not identifiable from the provided OCR text or vision model output.</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;1 Can&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a can with a nutrition facts label, but the brand and product family are not identifiable from the OCR text or the image itself.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;1 Can&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [&quot;The brand and product family are not identifiable from the provided OCR text or vision model output.&quot;]
}</pre>
</details>

## 81. hires_20260321-112125_can_0.88.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112125_can_0.88.jpg" alt="hires_20260321-112125_can_0.88.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112125_can_0.88.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>LaCroix Sparkling Lemon, sparkling water, 0-SWEETENER 0-SODIUM can</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>LaCroix</td></tr>
<tr><th align='left'>Product</th><td>LaCroix Sparkling Lemon</td></tr>
<tr><th align='left'>Variant</th><td>Sparkling Lemon</td></tr>
<tr><th align='left'>Category</th><td>sparkling water</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>0-SWEETENER 0-SODIUM can</td></tr>
<tr><th align='left'>Size</th><td>0-SWEETENER 0-SODIUM</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>i = iy Eb oi 3</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>0-SWEETENER 0-SODIUM</td></tr>
<tr><th align='left'>VLM Brand</th><td>LaCroix</td></tr>
<tr><th align='left'>VLM Variant</th><td>Sparkling Lemon</td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>LaCroix</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Sparkling Lemon</td></tr>
<tr><th align='left'>Resolver Family</th><td>sparkling water</td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;LaCroix&quot;,
  &quot;product_variant&quot;: &quot;Sparkling Lemon&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;recyclable&quot;,
  &quot;size_text&quot;: &quot;0-SWEETENER 0-SODIUM&quot;,
  &quot;best_catalog_match&quot;: &quot;LaCroix Sparkling Water&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The can is labeled as &#x27;Sparkling Lemon&#x27; and &#x27;0-SWEETENER 0-SODIUM&#x27;, indicating it is a low-sodium sparkling water.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;LaCroix&quot;,
  &quot;product_variant&quot;: &quot;Sparkling Lemon&quot;,
  &quot;product_family&quot;: &quot;sparkling water&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;recyclable&quot;,
  &quot;size_text&quot;: &quot;0-SWEETENER 0-SODIUM&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}</pre>
</details>

## 82. hires_20260321-112125_can_0.94.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112125_can_0.94.jpg" alt="hires_20260321-112125_can_0.94.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112125_can_0.94.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>nothing</td></tr>
<tr><th align='left'>Display Name</th><td>Feat ws, can</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td>Feat</td></tr>
<tr><th align='left'>Product</th><td>Feat ws</td></tr>
<tr><th align='left'>Variant</th><td>ws</td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>can</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>Feat ~*~, ws \“ % NaS Pay</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>feat</td></tr>
<tr><th align='left'>VLM Variant</th><td>ws</td></tr>
<tr><th align='left'>VLM Family</th><td></td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Feat</td></tr>
<tr><th align='left'>Resolver Variant</th><td>ws</td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>The image shows a can with a yellow label and some text, but the OCR text and shortlist candidates do not provide enough information to confidently identify the product family or other details.</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;feat&quot;,
  &quot;product_variant&quot;: &quot;ws&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a can with a yellow label and some text, but the OCR text and shortlist candidates do not provide enough information to confidently identify the product family or other details.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Feat&quot;,
  &quot;product_variant&quot;: &quot;ws&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [&quot;The image shows a can with a yellow label and some text, but the OCR text and shortlist candidates do not provide enough information to confidently identify the product family or other details.&quot;]
}</pre>
</details>

## 83. hires_20260321-112126_bottle_0.87.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112126_bottle_0.87.jpg" alt="hires_20260321-112126_bottle_0.87.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112126_bottle_0.87.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>San Pellegrino Lime Sparkling Water, beverages, 330ml can</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>San Pellegrino</td></tr>
<tr><th align='left'>Product</th><td>San Pellegrino Lime Sparkling Water</td></tr>
<tr><th align='left'>Variant</th><td>Lime Sparkling Water</td></tr>
<tr><th align='left'>Category</th><td>beverages</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>330ml can</td></tr>
<tr><th align='left'>Size</th><td>330ml</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>SUC ic oo 0 32 RING! gor tif © ue Gi</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>330ml</td></tr>
<tr><th align='left'>VLM Brand</th><td>San Pellegrino</td></tr>
<tr><th align='left'>VLM Variant</th><td>Lime</td></tr>
<tr><th align='left'>VLM Family</th><td>juice</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>San Pellegrino</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Lime Sparkling Water</td></tr>
<tr><th align='left'>Resolver Family</th><td>beverages</td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;San Pellegrino&quot;,
  &quot;product_variant&quot;: &quot;Lime&quot;,
  &quot;product_family&quot;: &quot;juice&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;recyclable&quot;,
  &quot;size_text&quot;: &quot;330ml&quot;,
  &quot;best_catalog_match&quot;: &quot;San Pellegrino Lime Sparkling Water&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;, &quot;shape&quot;],
  &quot;notes&quot;: &quot;The can is recyclable and contains lime juice.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;San Pellegrino&quot;,
  &quot;product_variant&quot;: &quot;Lime Sparkling Water&quot;,
  &quot;product_family&quot;: &quot;beverages&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;recyclable&quot;,
  &quot;size_text&quot;: &quot;330ml&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}</pre>
</details>

## 84. hires_20260321-112126_bottle_0.92.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112126_bottle_0.92.jpg" alt="hires_20260321-112126_bottle_0.92.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112126_bottle_0.92.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>nothing</td></tr>
<tr><th align='left'>Display Name</th><td>green</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>green</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>a re | feral</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot180</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td></td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>OCR text is not clear</li>
<li>Shortlist candidates are not provided</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a green can with a logo and some text, but the OCR text is not clear and the shortlist candidates are not provided. The product family and variant cannot be determined with the given information.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;green&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [&quot;OCR text is not clear&quot;, &quot;Shortlist candidates are not provided&quot;]
}</pre>
</details>

## 85. hires_20260321-112126_box_0.71.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112126_box_0.71.jpg" alt="hires_20260321-112126_box_0.71.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112126_box_0.71.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>nothing</td></tr>
<tr><th align='left'>Display Name</th><td>100 ml tub</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>tub</td></tr>
<tr><th align='left'>Package</th><td>100 ml tub</td></tr>
<tr><th align='left'>Size</th><td>100 ml</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>YJ fu</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>100 ml</td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td></td></tr>
<tr><th align='left'>VLM Container</th><td>tub</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td>tub</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>The OCR text &#x27;YJ fu&#x27; does not provide any additional information to identify the brand or product family.</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;single compartment&quot;,
  &quot;size_text&quot;: &quot;100 ml&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a single compartment tub with a size text indicating 100 ml. The OCR text &#x27;YJ fu&#x27; does not provide any additional information to identify the brand or product family.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;single compartment&quot;,
  &quot;size_text&quot;: &quot;100 ml&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [
    &quot;The OCR text &#x27;YJ fu&#x27; does not provide any additional information to identify the brand or product family.&quot;
  ]
}</pre>
</details>

## 86. hires_20260321-112126_box_0.95.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112126_box_0.95.jpg" alt="hires_20260321-112126_box_0.95.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112126_box_0.95.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Gotham Greens Baby Butterhead, salad dressing, 16 oz tub</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Gotham Greens</td></tr>
<tr><th align='left'>Product</th><td>Gotham Greens Baby Butterhead</td></tr>
<tr><th align='left'>Variant</th><td>Baby Butterhead</td></tr>
<tr><th align='left'>Category</th><td>salad dressing</td></tr>
<tr><th align='left'>Container</th><td>tub</td></tr>
<tr><th align='left'>Package</th><td>16 oz tub</td></tr>
<tr><th align='left'>Size</th><td>16 oz</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>Ss NY Ae a Oa ao % Print: G =&gt; o= IN</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot180</td></tr>
<tr><th align='left'>OCR Size</th><td>16 oz</td></tr>
<tr><th align='left'>VLM Brand</th><td>Gotham Greens</td></tr>
<tr><th align='left'>VLM Variant</th><td>Baby Butterhead</td></tr>
<tr><th align='left'>VLM Family</th><td>produce</td></tr>
<tr><th align='left'>VLM Container</th><td>tub</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Gotham Greens</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Baby Butterhead</td></tr>
<tr><th align='left'>Resolver Family</th><td>salad dressing</td></tr>
<tr><th align='left'>Resolver Container</th><td>tub</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Gotham Greens&quot;,
  &quot;product_variant&quot;: &quot;Baby Butterhead&quot;,
  &quot;product_family&quot;: &quot;produce&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;16 oz&quot;,
  &quot;best_catalog_match&quot;: &quot;salad greens&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a circular plastic container with a label indicating it contains baby butterhead lettuce, which is a type of salad green.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Gotham Greens&quot;,
  &quot;product_variant&quot;: &quot;Baby Butterhead&quot;,
  &quot;product_family&quot;: &quot;Salad Greens&quot;,
  &quot;container_type&quot;: &quot;Tub&quot;,
  &quot;container_spec&quot;: &quot;Plastic&quot;,
  &quot;size_text&quot;: &quot;16 oz&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}</pre>
</details>

## 87. hires_20260321-112127_bottle_0.75.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112127_bottle_0.75.jpg" alt="hires_20260321-112127_bottle_0.75.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112127_bottle_0.75.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Lime, sparkling water, 0 CALORIE can</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Lime</td></tr>
<tr><th align='left'>Product</th><td>Lime</td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td>sparkling water</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>0 CALORIE can</td></tr>
<tr><th align='left'>Size</th><td>0 CALORIE</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>y -_ | Tae yO) Se UES</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot90</td></tr>
<tr><th align='left'>OCR Size</th><td>0 CALORIE</td></tr>
<tr><th align='left'>VLM Brand</th><td>Lime</td></tr>
<tr><th align='left'>VLM Variant</th><td>Sparkling Water</td></tr>
<tr><th align='left'>VLM Family</th><td>sparkling water</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Lime</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Sparkling Water</td></tr>
<tr><th align='left'>Resolver Family</th><td>sparkling water</td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Lime&quot;,
  &quot;product_variant&quot;: &quot;Sparkling Water&quot;,
  &quot;product_family&quot;: &quot;sparkling water&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;single&quot;,
  &quot;size_text&quot;: &quot;0 CALORIE&quot;,
  &quot;best_catalog_match&quot;: &quot;Lime Sparkling Water&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The can is green with a lime design, indicating it is a lime-flavored sparkling water.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> Based on the provided OCR text and vision model output, here&#x27;s the normalized JSON:

```json
{
  &quot;brand&quot;: &quot;Lime&quot;,
  &quot;product_variant&quot;: &quot;Sparkling Water&quot;,
  &quot;product_family&quot;: &quot;sparkling water&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;single&quot;,
  &quot;size_text&quot;: &quot;0 CALORIE&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}
```

In this case, the brand is identified as &quot;Lime&quot; directly from the vision model output, and there are no noisy or generic strings to normalize. The product variant and family match directly from the vision model output as well. The container type and spec are also consistent with the vision model output. The size text is taken directly from the OCR text. Since there are no noise or errors in the given data, the reasons field remains empty.</pre>
</details>

## 88. hires_20260321-112127_bottle_0.92.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112127_bottle_0.92.jpg" alt="hires_20260321-112127_bottle_0.92.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112127_bottle_0.92.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>nothing</td></tr>
<tr><th align='left'>Display Name</th><td>beverage can</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td>beverage</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>5.5 OZ can</td></tr>
<tr><th align='left'>Size</th><td>5.5 OZ</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>ets aie iy yee Nor’ 7</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>5.5 OZ</td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td></td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td>beverage</td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>The brand is not clearly visible in the provided image.</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;5.5 OZ&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a can with a nutrition facts label, suggesting it is a beverage. The size text indicates it is 5.5 OZ.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;Beverage&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;5.5 OZ&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [&quot;The brand is not clearly visible in the provided image.&quot;]
}</pre>
</details>

## 89. hires_20260321-112127_bottle_0.95.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112127_bottle_0.95.jpg" alt="hires_20260321-112127_bottle_0.95.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112127_bottle_0.95.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>San Pellegrino Mineral Water, water, 500 ML bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>San Pellegrino</td></tr>
<tr><th align='left'>Product</th><td>San Pellegrino Mineral Water</td></tr>
<tr><th align='left'>Variant</th><td>Mineral Water</td></tr>
<tr><th align='left'>Category</th><td>water</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>500 ML bottle</td></tr>
<tr><th align='left'>Size</th><td>500 ML</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>a 28) vr aA I la</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot90</td></tr>
<tr><th align='left'>OCR Size</th><td>500 ML</td></tr>
<tr><th align='left'>VLM Brand</th><td>San Pellegrino</td></tr>
<tr><th align='left'>VLM Variant</th><td>Mineral Water</td></tr>
<tr><th align='left'>VLM Family</th><td>water</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>San Pellegrino</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Mineral Water</td></tr>
<tr><th align='left'>Resolver Family</th><td>water</td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;San Pellegrino&quot;,
  &quot;product_variant&quot;: &quot;Mineral Water&quot;,
  &quot;product_family&quot;: &quot;water&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;green glass&quot;,
  &quot;size_text&quot;: &quot;500 ML&quot;,
  &quot;best_catalog_match&quot;: &quot;San Pellegrino 500ml bottle&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;, &quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a green glass bottle with a label indicating it is San Pellegrino mineral water, with a size of 500 ML.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> Based on the OCR text and the raw vision model output, no additional information seems to be missing. The vision model has already correctly identified the brand, product variant, product family, container type, container spec, and size. Therefore, here is the JSON response:

```json
{
  &quot;brand&quot;: &quot;San Pellegrino&quot;,
  &quot;product_variant&quot;: &quot;Mineral Water&quot;,
  &quot;product_family&quot;: &quot;water&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;green glass&quot;,
  &quot;size_text&quot;: &quot;500 ML&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}
```
In this case, there are no reasons to mention as the output is accurate and detailed.</pre>
</details>

## 90. hires_20260321-112127_box_0.70.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112127_box_0.70.jpg" alt="hires_20260321-112127_box_0.70.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112127_box_0.70.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>nothing</td></tr>
<tr><th align='left'>Display Name</th><td>yogurt tub</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td>yogurt</td></tr>
<tr><th align='left'>Container</th><td>tub</td></tr>
<tr><th align='left'>Package</th><td>single compartment</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td></td></tr>
<tr><th align='left'>OCR Engine</th><td>none</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td>yogurt</td></tr>
<tr><th align='left'>VLM Container</th><td>tub</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td>yogurt</td></tr>
<tr><th align='left'>Resolver Container</th><td>tub</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>The OCR text is not available and the vision model output indicates a generic yogurt container</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;yogurt&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;single compartment&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;],
  &quot;notes&quot;: &quot;The container appears to be a single compartment tub, commonly used for yogurt.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;yogurt&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;single compartment&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [&quot;The OCR text is not available and the vision model output indicates a generic yogurt container&quot;]
}</pre>
</details>

## 91. hires_20260321-112127_cup_0.72.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112127_cup_0.72.jpg" alt="hires_20260321-112127_cup_0.72.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112127_cup_0.72.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>nothing</td></tr>
<tr><th align='left'>Display Name</th><td>jar</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>jar</td></tr>
<tr><th align='left'>Package</th><td>jar</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td></td></tr>
<tr><th align='left'>OCR Engine</th><td>none</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td></td></tr>
<tr><th align='left'>VLM Container</th><td>jar</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td>jar</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>No visible branding or text to identify the product family or variant.</li>
<li>The image shows a close-up of a circular container with a metallic rim, suggesting it could be a jar.</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;jar&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a close-up of a circular container with a metallic rim, suggesting it could be a jar. There is no visible branding or text to identify the product family or variant.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> Based on the provided vision model output and the absence of OCR text, I&#x27;ll provide a normalized response using the context from the vision model output. However, please note that without actual OCR data, this is an educated guess:

```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;jar&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [&quot;No visible branding or text to identify the product family or variant.&quot;, &quot;The image shows a close-up of a circular container with a metallic rim, suggesting it could be a jar.&quot;]
}
```</pre>
</details>

## 92. hires_20260321-112128_bottle_0.70.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112128_bottle_0.70.jpg" alt="hires_20260321-112128_bottle_0.70.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112128_bottle_0.70.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Sprite Zero Calorie Lime, soda, 12 fl oz can</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Sprite</td></tr>
<tr><th align='left'>Product</th><td>Sprite Zero Calorie Lime</td></tr>
<tr><th align='left'>Variant</th><td>Zero Calorie Lime</td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>12 fl oz can</td></tr>
<tr><th align='left'>Size</th><td>12 fl oz</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>ti 4 a Ne 7 iS = ES ra</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot180</td></tr>
<tr><th align='left'>OCR Size</th><td>12 fl oz</td></tr>
<tr><th align='left'>VLM Brand</th><td>Sprite</td></tr>
<tr><th align='left'>VLM Variant</th><td>0 Calorie</td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Sprite</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Zero Calorie Lime</td></tr>
<tr><th align='left'>Resolver Family</th><td>soda</td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>OCR text and vision model output both indicate &#x27;Sprite&#x27;, and the can is labeled as &#x27;0 Calorie&#x27; and &#x27;Lime Water&#x27;.</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Sprite&quot;,
  &quot;product_variant&quot;: &quot;0 Calorie&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;12 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;Sprite 0 Calorie&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The can is labeled with &#x27;0 Calorie&#x27; and &#x27;Lime Water&#x27;, indicating it is a sugar-free lime-flavored soda.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Sprite&quot;,
  &quot;product_variant&quot;: &quot;Zero Calorie Lime&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;12 fl oz&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: [&quot;OCR text and vision model output both indicate &#x27;Sprite&#x27;, and the can is labeled as &#x27;0 Calorie&#x27; and &#x27;Lime Water&#x27;.&quot;]
}</pre>
</details>

## 93. hires_20260321-112128_bottle_0.85.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112128_bottle_0.85.jpg" alt="hires_20260321-112128_bottle_0.85.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112128_bottle_0.85.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>LaCroix Lime, soda, 0-SWEETENER can</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>LaCroix</td></tr>
<tr><th align='left'>Product</th><td>LaCroix Lime</td></tr>
<tr><th align='left'>Variant</th><td>Lime</td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>0-SWEETENER can</td></tr>
<tr><th align='left'>Size</th><td>0-SWEETENER</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>me es ge ne hai Oe</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot90</td></tr>
<tr><th align='left'>OCR Size</th><td>0-SWEETENER</td></tr>
<tr><th align='left'>VLM Brand</th><td>LaCroix</td></tr>
<tr><th align='left'>VLM Variant</th><td>Lime</td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>LaCroix</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Lime</td></tr>
<tr><th align='left'>Resolver Family</th><td>soda</td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;LaCroix&quot;,
  &quot;product_variant&quot;: &quot;Lime&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;recyclable&quot;,
  &quot;size_text&quot;: &quot;0-SWEETENER&quot;,
  &quot;best_catalog_match&quot;: &quot;LaCroix Lime Sparkling Water&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image is slightly blurry, but the text and logo are recognizable.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> Based on the provided OCR text and vision model output, I have normalized the data according to your schema:

```json
{
  &quot;brand&quot;: &quot;LaCroix&quot;,
  &quot;product_variant&quot;: &quot;Lime&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;recyclable&quot;,
  &quot;size_text&quot;: &quot;0-SWEETENER&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}
```

In this case, the OCR text is noisy but the raw vision model output provides a clear brand identification, so I have used the vision model output to fill in the details.</pre>
</details>

## 94. hires_20260321-112128_cup_0.90.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112128_cup_0.90.jpg" alt="hires_20260321-112128_cup_0.90.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112128_cup_0.90.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Sanpellegrino Blood Orange, soda, 330ml can</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Sanpellegrino</td></tr>
<tr><th align='left'>Product</th><td>Sanpellegrino Blood Orange</td></tr>
<tr><th align='left'>Variant</th><td>Blood Orange</td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>330ml can</td></tr>
<tr><th align='left'>Size</th><td>330ml</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>a ey ws, “00,</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>330ml</td></tr>
<tr><th align='left'>VLM Brand</th><td>Sanpellegrino</td></tr>
<tr><th align='left'>VLM Variant</th><td>Blood Orange</td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Sanpellegrino</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Blood Orange</td></tr>
<tr><th align='left'>Resolver Family</th><td>soda</td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Sanpellegrino&quot;,
  &quot;product_variant&quot;: &quot;Blood Orange&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;recyclable&quot;,
  &quot;size_text&quot;: &quot;330ml&quot;,
  &quot;best_catalog_match&quot;: &quot;Sanpellegrino Blood Orange Soda&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;, &quot;shape&quot;],
  &quot;notes&quot;: &quot;The can is recyclable and has a barcode, indicating it is a beverage product.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Sanpellegrino&quot;,
  &quot;product_variant&quot;: &quot;Blood Orange&quot;,
  &quot;product_family&quot;: &quot;Soda&quot;,
  &quot;container_type&quot;: &quot;Can&quot;,
  &quot;container_spec&quot;: &quot;Recyclable&quot;,
  &quot;size_text&quot;: &quot;330ml&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}</pre>
</details>

## 95. hires_20260321-112129_bottle_0.77.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112129_bottle_0.77.jpg" alt="hires_20260321-112129_bottle_0.77.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112129_bottle_0.77.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>San Pellegrino Blood Orange, sparkling water, 10 fl oz can</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>San Pellegrino</td></tr>
<tr><th align='left'>Product</th><td>San Pellegrino Blood Orange</td></tr>
<tr><th align='left'>Variant</th><td>Blood Orange</td></tr>
<tr><th align='left'>Category</th><td>sparkling water</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>10 fl oz can</td></tr>
<tr><th align='left'>Size</th><td>10 fl oz</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>Pee QO us rx) ae Wanna BA a Wegaeee</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot270</td></tr>
<tr><th align='left'>OCR Size</th><td>10 fl oz</td></tr>
<tr><th align='left'>VLM Brand</th><td>San Pellegrino</td></tr>
<tr><th align='left'>VLM Variant</th><td>Blood Orange</td></tr>
<tr><th align='left'>VLM Family</th><td>juice</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>San Pellegrino</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Blood Orange</td></tr>
<tr><th align='left'>Resolver Family</th><td>sparkling water</td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;San Pellegrino&quot;,
  &quot;product_variant&quot;: &quot;Blood Orange&quot;,
  &quot;product_family&quot;: &quot;juice&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;10 fl oz&quot;,
  &quot;size_text&quot;: &quot;10 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;San Pellegrino Blood Orange Sparkling Water&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;, &quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a can with a label indicating it is San Pellegrino Blood Orange, which is a type of sparkling water.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;San Pellegrino&quot;,
  &quot;product_variant&quot;: &quot;Blood Orange&quot;,
  &quot;product_family&quot;: &quot;sparkling water&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;10 fl oz&quot;,
  &quot;size_text&quot;: &quot;10 fl oz&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}</pre>
</details>

## 96. hires_20260321-112129_bottle_0.88.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112129_bottle_0.88.jpg" alt="hires_20260321-112129_bottle_0.88.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112129_bottle_0.88.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Sanpellegrino Blood Orange, soda, 330 ml can</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Sanpellegrino</td></tr>
<tr><th align='left'>Product</th><td>Sanpellegrino Blood Orange</td></tr>
<tr><th align='left'>Variant</th><td>Blood Orange</td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>330 ml can</td></tr>
<tr><th align='left'>Size</th><td>330 ml</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>S ny, 2m £9 oe&quot; me Be 2% a. Pus or, pepe Ae; ig Mer @e,</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot180</td></tr>
<tr><th align='left'>OCR Size</th><td>330 ml</td></tr>
<tr><th align='left'>VLM Brand</th><td>SANPELLEGRINO</td></tr>
<tr><th align='left'>VLM Variant</th><td>BLOOD ORANGE</td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Sanpellegrino</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Blood Orange</td></tr>
<tr><th align='left'>Resolver Family</th><td>soda</td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;SANPELLEGRINO&quot;,
  &quot;product_variant&quot;: &quot;BLOOD ORANGE&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;recyclable&quot;,
  &quot;size_text&quot;: &quot;330 ml&quot;,
  &quot;best_catalog_match&quot;: &quot;sanpellegrino blood orange soda&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;, &quot;shape&quot;],
  &quot;notes&quot;: &quot;The can is recyclable and has a barcode indicating it is a 330 ml can.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Sanpellegrino&quot;,
  &quot;product_variant&quot;: &quot;Blood Orange&quot;,
  &quot;product_family&quot;: &quot;Soda&quot;,
  &quot;container_type&quot;: &quot;Can&quot;,
  &quot;container_spec&quot;: &quot;Recyclable&quot;,
  &quot;size_text&quot;: &quot;330 ml&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}</pre>
</details>

## 97. hires_20260321-112130_bottle_0.93.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112130_bottle_0.93.jpg" alt="hires_20260321-112130_bottle_0.93.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112130_bottle_0.93.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Ciao! SANGUELLERI, iced tea, 10 fl oz can</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Ciao!</td></tr>
<tr><th align='left'>Product</th><td>Ciao! SANGUELLERI</td></tr>
<tr><th align='left'>Variant</th><td>SANGUELLERI</td></tr>
<tr><th align='left'>Category</th><td>iced tea</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>10 fl oz can</td></tr>
<tr><th align='left'>Size</th><td>10 fl oz</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>20 ee Bue fame 87% ac HO x Oh na 53</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>10 fl oz</td></tr>
<tr><th align='left'>VLM Brand</th><td>Ciao!</td></tr>
<tr><th align='left'>VLM Variant</th><td>SANGUELLERI</td></tr>
<tr><th align='left'>VLM Family</th><td>iced tea</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Ciao!</td></tr>
<tr><th align='left'>Resolver Variant</th><td>SANGUELLERI</td></tr>
<tr><th align='left'>Resolver Family</th><td>iced tea</td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Ciao!&quot;,
  &quot;product_variant&quot;: &quot;SANGUELLERI&quot;,
  &quot;product_family&quot;: &quot;iced tea&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;10 fl oz&quot;,
  &quot;size_text&quot;: &quot;10 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;iced tea&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a can with an orange slice and the brand name &#x27;Ciao!&#x27; prominently displayed, indicating it is likely an iced tea product.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Ciao!&quot;,
  &quot;product_variant&quot;: &quot;SANGUELLERI&quot;,
  &quot;product_family&quot;: &quot;Iced Tea&quot;,
  &quot;container_type&quot;: &quot;Can&quot;,
  &quot;container_spec&quot;: &quot;10 fl oz&quot;,
  &quot;size_text&quot;: &quot;10 fl oz&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}</pre>
</details>

## 98. hires_20260321-112130_bottle_0.96.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112130_bottle_0.96.jpg" alt="hires_20260321-112130_bottle_0.96.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112130_bottle_0.96.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Tepache Mango, soda, 12 fl oz can</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Tepache</td></tr>
<tr><th align='left'>Product</th><td>Tepache Mango</td></tr>
<tr><th align='left'>Variant</th><td>Mango</td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>12 fl oz can</td></tr>
<tr><th align='left'>Size</th><td>12 fl oz</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>Fe) (oh Le) ea Fd Reese, ~~ n fe #</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot270</td></tr>
<tr><th align='left'>OCR Size</th><td>12 fl oz</td></tr>
<tr><th align='left'>VLM Brand</th><td>Tepache</td></tr>
<tr><th align='left'>VLM Variant</th><td>Mango</td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Tepache</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Mango</td></tr>
<tr><th align='left'>Resolver Family</th><td>soda</td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Tepache&quot;,
  &quot;product_variant&quot;: &quot;Mango&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;recyclable&quot;,
  &quot;size_text&quot;: &quot;12 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;soda&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The can is red with a pineapple logo and text indicating it is a Mexican soda.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> Based on the provided OCR text and the vision model output, here&#x27;s the normalized JSON:

```json
{
  &quot;brand&quot;: &quot;Tepache&quot;,
  &quot;product_variant&quot;: &quot;Mango&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;recyclable&quot;,
  &quot;size_text&quot;: &quot;12 fl oz&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}
```

In this case, the brand name &quot;Tepache&quot; is confirmed by both the OCR text and the vision model output, so it remains unchanged. The product variant is also confirmed as &quot;Mango&quot;. The product family is identified as &quot;soda&quot;, which is the best catalog match according to the vision model output. The container type is &quot;can&quot;, and the container spec is &quot;recyclable&quot; as per the vision model output. The size text is &quot;12 fl oz&quot; from the OCR text. The confidence level is 0.9, as provided by the vision model output. Since there are no noisy or conflicting details in this example, the reasons field remains empty.</pre>
</details>

## 99. hires_20260321-112130_can_0.94.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112130_can_0.94.jpg" alt="hires_20260321-112130_can_0.94.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112130_can_0.94.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Sunkist Sparkling Lemon, soda, 12 fl oz can</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Sunkist</td></tr>
<tr><th align='left'>Product</th><td>Sunkist Sparkling Lemon</td></tr>
<tr><th align='left'>Variant</th><td>Sparkling Lemon</td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>12 fl oz can</td></tr>
<tr><th align='left'>Size</th><td>12 fl oz</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>i fo od &gt;a) ~ Ss eet H bey mail</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot90</td></tr>
<tr><th align='left'>OCR Size</th><td>12 fl oz</td></tr>
<tr><th align='left'>VLM Brand</th><td>Lemon</td></tr>
<tr><th align='left'>VLM Variant</th><td>Sparkling</td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Sunkist</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Sparkling Lemon</td></tr>
<tr><th align='left'>Resolver Family</th><td>soda</td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>The vision model output identifies the brand as &#x27;Lemon&#x27;, which is a flavor and not a brand itself. The OCR text doesn&#x27;t provide a clear brand name, but the can design suggests it could be Sunkist.</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Lemon&quot;,
  &quot;product_variant&quot;: &quot;Sparkling&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;12 fl oz&quot;,
  &quot;size_text&quot;: &quot;12 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;soda&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a can with a yellow label and the word &#x27;Lemon&#x27; visible, indicating it is a lemon-flavored sparkling drink.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> Based on the provided OCR text and vision model output, here&#x27;s the normalized JSON:

```json
{
  &quot;brand&quot;: &quot;Sunkist&quot;,
  &quot;product_variant&quot;: &quot;Sparkling Lemon&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;12 fl oz&quot;,
  &quot;size_text&quot;: &quot;12 fl oz&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: [&quot;The vision model output identifies the brand as &#x27;Lemon&#x27;, which is a flavor and not a brand itself. The OCR text doesn&#x27;t provide a clear brand name, but the can design suggests it could be Sunkist.&quot;]
}
```

In this case, the brand was normalized to &quot;Sunkist&quot; based on the can design suggesting that it could be the brand of the product.</pre>
</details>

## 100. hires_20260321-112131_bottle_0.95.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="Collection-Detections-20260322/hires_20260321-112131_bottle_0.95.jpg" alt="hires_20260321-112131_bottle_0.95.jpg" width="340" />
      <p><code>Collection-Detections-20260322/hires_20260321-112131_bottle_0.95.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Ferrero Hazelnut Spread with Cocoa, spread, Net Wt 7.65 oz jar</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Ferrero</td></tr>
<tr><th align='left'>Product</th><td>Ferrero Hazelnut Spread with Cocoa</td></tr>
<tr><th align='left'>Variant</th><td>Hazelnut Spread with Cocoa</td></tr>
<tr><th align='left'>Category</th><td>spread</td></tr>
<tr><th align='left'>Container</th><td>jar</td></tr>
<tr><th align='left'>Package</th><td>Net Wt 7.65 oz jar</td></tr>
<tr><th align='left'>Size</th><td>Net Wt 7.65 oz</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>3 a = —_— a © hutel THis JAR 5 Pn yo A et ttn FERRERO READ Wi Oita</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot180</td></tr>
<tr><th align='left'>OCR Size</th><td>Net Wt 7.65 oz</td></tr>
<tr><th align='left'>VLM Brand</th><td>Ferrero</td></tr>
<tr><th align='left'>VLM Variant</th><td>Hazelnut Spread with Cocoa</td></tr>
<tr><th align='left'>VLM Family</th><td>spread</td></tr>
<tr><th align='left'>VLM Container</th><td>jar</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Ferrero</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Hazelnut Spread with Cocoa</td></tr>
<tr><th align='left'>Resolver Family</th><td>spread</td></tr>
<tr><th align='left'>Resolver Container</th><td>jar</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Ferrero&quot;,
  &quot;product_variant&quot;: &quot;Hazelnut Spread with Cocoa&quot;,
  &quot;product_family&quot;: &quot;spread&quot;,
  &quot;container_type&quot;: &quot;jar&quot;,
  &quot;container_spec&quot;: &quot;recyclable&quot;,
  &quot;size_text&quot;: &quot;Net Wt 7.65 oz&quot;,
  &quot;best_catalog_match&quot;: &quot;Nutella Hazelnut Spread&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a jar of Nutella, a well-known hazelnut spread product by Ferrero.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Ferrero&quot;,
  &quot;product_variant&quot;: &quot;Hazelnut Spread with Cocoa&quot;,
  &quot;product_family&quot;: &quot;spread&quot;,
  &quot;container_type&quot;: &quot;jar&quot;,
  &quot;container_spec&quot;: &quot;recyclable&quot;,
  &quot;size_text&quot;: &quot;Net Wt 7.65 oz&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}</pre>
</details>
