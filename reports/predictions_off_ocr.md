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
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>milk, dairy, 1 gallon jug</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>milk</td></tr>
<tr><th align='left'>Product</th><td>milk</td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>jug</td></tr>
<tr><th align='left'>Package</th><td>1 gallon jug</td></tr>
<tr><th align='left'>Size</th><td>1 gallon</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td></td></tr>
<tr><th align='left'>OCR Engine</th><td>none</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>1 gallon</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>jug</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>milk</td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td>dairy</td></tr>
<tr><th align='left'>Resolver Container</th><td>jug</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      
      
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
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;1 gallon&quot;,
  &quot;best_catalog_match&quot;: &quot;milk&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;shape&quot;],
  &quot;notes&quot;: &quot;The container is a typical milk jug with a green cap, commonly used for storing and dispensing milk.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>Here&#x27;s the normalized JSON output:

```
{
  &quot;brand&quot;: &quot;milk&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;jug&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;1 gallon&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}
```

I made the following changes based on the provided OCR text and raw vision model output:

- Since there was no explicit brand provided in the OCR text, I relied on the `best_catalog_match` from the raw vision model output to determine the brand.
- The `product_variant`, `container_type`, `container_spec`, and `size_text` were taken directly from the raw vision model output.
- I chose to trust the `confidence` value provided in the raw vision model output, which is 0.8 in this case. This indicates that the model is fairly confident in its identification of the product.
- Since there was no explicit reason for any errors or discrepancies, I left the `reasons` array empty.

Please note that the OCR text did not contain any brand information, so it wasn&#x27;t used to make any decisions about the normalization of the output.</pre>
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
<tr><th align='left'>Display Name</th><td>Chobani Zero Added Sugar, yogurt, NET WT 6.25 OZ tub</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Chobani</td></tr>
<tr><th align='left'>Product</th><td>Chobani Zero Added Sugar</td></tr>
<tr><th align='left'>Variant</th><td>Zero Added Sugar</td></tr>
<tr><th align='left'>Category</th><td>yogurt</td></tr>
<tr><th align='left'>Container</th><td>tub</td></tr>
<tr><th align='left'>Package</th><td>NET WT 6.25 OZ tub</td></tr>
<tr><th align='left'>Size</th><td>NET WT 6.25 OZ</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>na ln lt sonnos eiuea stanis wnname ieons oll pappy uanouddog sunn lcue us jueqoua teensnd sn caneetee ox esas er tn ae 5d notan taaan sneosdong</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>NET WT 6.25 OZ</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Chobani</td></tr>
<tr><th align='left'>VLM Variant</th><td>Zero Added Sugar</td></tr>
<tr><th align='left'>VLM Family</th><td>yogurt</td></tr>
<tr><th align='left'>VLM Container</th><td>tub</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td></td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.5</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Chobani&quot;,
  &quot;product_variant&quot;: &quot;Zero Added Sugar&quot;,
  &quot;product_family&quot;: &quot;yogurt&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;20g Protein&quot;,
  &quot;size_text&quot;: &quot;NET WT 6.25 OZ&quot;,
  &quot;best_catalog_match&quot;: &quot;yogurt&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a container with branding and nutritional information typical of a yogurt product.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.5,
  &quot;reasons&quot;: []
}
```</pre>
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
<tr><th align='left'>Display Name</th><td>Coca-Cola Original, soda, 200 ml bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Product</th><td>Coca-Cola Original</td></tr>
<tr><th align='left'>Variant</th><td>Original</td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>200 ml bottle</td></tr>
<tr><th align='left'>Size</th><td>200 ml</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>hdpe 2 high density polyethylene, pet 1 polyethylene terephthalate, pp 5 polypropylene</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>epi suusrnsne t lsvi 006 moi onn sioea mouinn</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>200 ml</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>VLM Variant</th><td>Original</td></tr>
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
  &quot;product_variant&quot;: &quot;Original&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;200 ml&quot;,
  &quot;best_catalog_match&quot;: &quot;Coca-Cola 200ml bottle&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;size_text&quot;],
  &quot;notes&quot;: &quot;The image shows a clear plastic bottle with a red label, which is characteristic of Coca-Cola bottles. The size text &#x27;200 ml&#x27; is clearly visible, indicating the bottle&#x27;s capacity.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
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
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Product</th><td>Coca-Cola Zero</td></tr>
<tr><th align='left'>Variant</th><td>Zero</td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>20 oz bottle</td></tr>
<tr><th align='left'>Size</th><td>20 oz</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>0 ox te boll</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>20 oz</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>VLM Variant</th><td>Zero</td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Zero</td></tr>
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
  &quot;product_variant&quot;: &quot;Zero&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;20 oz&quot;,
  &quot;best_catalog_match&quot;: &quot;soda&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a plastic bottle with a label indicating it is a zero-calorie soda.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```
{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;Zero&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;20 oz&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}
```

Note that the `brand` field was normalized to its canonical consumer-facing name, and the other fields were populated from the raw vision model output. The confidence level is also set to 0.9, indicating a high degree of accuracy.</pre>
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
<tr><th align='left'>Display Name</th><td>Pepsi Diet, soda, 500 mL bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Pepsi</td></tr>
<tr><th align='left'>Product</th><td>Pepsi Diet</td></tr>
<tr><th align='left'>Variant</th><td>Diet</td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>500 mL bottle</td></tr>
<tr><th align='left'>Size</th><td>500 mL</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>epsi lv sumssnn biau ti slsvi loty mo sor diet</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>500 mL</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Pepsi</td></tr>
<tr><th align='left'>VLM Variant</th><td>Diet</td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td></td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
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
  &quot;container_spec&quot;: &quot;500 mL&quot;,
  &quot;size_text&quot;: &quot;500 mL&quot;,
  &quot;best_catalog_match&quot;: &quot;diet soda bottle&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a clear plastic bottle with the Pepsi logo and the word &#x27;Diet&#x27; visible, indicating it is a diet soda.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: []
}
```

Explanation:

- No specific brand normalization was provided in the prompt, so I did not apply any normalization to the raw vision model output&#x27;s `brand` field.
- The `product_variant`, `product_family`, `container_type`, and `container_spec` fields were set to empty strings as they contained generic or non-canonical information.</pre>
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
<tr><th align='left'>Display Name</th><td>Chobani Greek Yogurt, dairy, 5.3 OZ (150g) tub</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Chobani</td></tr>
<tr><th align='left'>Product</th><td>Chobani Greek Yogurt</td></tr>
<tr><th align='left'>Variant</th><td>Greek Yogurt</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>tub</td></tr>
<tr><th align='left'>Package</th><td>5.3 OZ (150g) tub</td></tr>
<tr><th align='left'>Size</th><td>5.3 OZ (150g)</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>proroties oe bilkions sen n facts calnes ce nutrition fue stui see ires c per dvi amunt cas erates cs toal untneny og s nnys f oo noded cselente dv enea diaa cosectlr tta fx cnrgies wwan to cacan ckriees unch dois te dv lie dlen bo chobae batoss o cuestins rell cncenr iral bosury mik ua sox sep stit t</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>5.3 OZ (150g)</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Chobani</td></tr>
<tr><th align='left'>VLM Variant</th><td>Greek Yogurt</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>tub</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Chobani</td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
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
  &quot;product_variant&quot;: &quot;Greek Yogurt&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;recyclable&quot;,
  &quot;size_text&quot;: &quot;5.3 OZ (150g)&quot;,
  &quot;best_catalog_match&quot;: &quot;Greek Yogurt&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a close-up of a Chobani Greek Yogurt container with nutritional information and branding visible.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;Chobani&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;recyclable&quot;,
  &quot;size_text&quot;: &quot;&quot;,
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
<tr><th align='left'>Display Name</th><td>Orville&#x27;s Redenbacher&#x27;s Original, condiment, 10 oz jar</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Orville&#x27;s Redenbacher&#x27;s</td></tr>
<tr><th align='left'>Product</th><td>Orville&#x27;s Redenbacher&#x27;s Original</td></tr>
<tr><th align='left'>Variant</th><td>Original</td></tr>
<tr><th align='left'>Category</th><td>condiment</td></tr>
<tr><th align='left'>Container</th><td>jar</td></tr>
<tr><th align='left'>Package</th><td>10 oz jar</td></tr>
<tr><th align='left'>Size</th><td>10 oz</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>ivnidiao suaypdquapay ailajo wanivt xoon</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>10 oz</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Orville&#x27;s Redenbacher&#x27;s</td></tr>
<tr><th align='left'>VLM Variant</th><td>Original</td></tr>
<tr><th align='left'>VLM Family</th><td>condiment</td></tr>
<tr><th align='left'>VLM Container</th><td>jar</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td></td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Orville&#x27;s Redenbacher&#x27;s&quot;,
  &quot;product_variant&quot;: &quot;Original&quot;,
  &quot;product_family&quot;: &quot;condiment&quot;,
  &quot;container_type&quot;: &quot;jar&quot;,
  &quot;container_spec&quot;: &quot;recyclable&quot;,
  &quot;size_text&quot;: &quot;10 oz&quot;,
  &quot;best_catalog_match&quot;: &quot;popcorn kernels&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a jar of popcorn kernels, which is a type of condiment used for making popcorn.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: []
}
```

Explanation:

- The brand was not found in the OCR text, and the vision model output contains a generic category word (&quot;condiment&quot;), so we set `brand` to empty.
- The product_variant is also not found in the OCR text or the vision model output, so we leave it as an empty string.
- We cannot determine the container_type or size_text from the provided information, so they are left empty.
- The confidence level of 0.8 from the vision model suggests that there is some uncertainty in the data, but since we have not found any reliable evidence to contradict this output, we do not update the fields.

If you want to provide a generic value for `brand` (e.g., &quot;Snack Food&quot;), you can modify the code as follows:

```
const brandNormalizations = {
  &quot;Coke&quot;: &quot;Coca-Cola&quot;,
  &quot;Mt Dew&quot;: &quot;Mountain Dew&quot;,
  &quot;A and W&quot;: &quot;A&amp;W&quot;,
};

//...

const rawOutput = { ... }; // assume rawOutput is the vision model output
const ocrText = &quot;ivnidiao suaypdquapay ailajo wanivt xoon&quot;;

if (rawOutput.brand &amp;&amp; !brandNormalizations[rawOutput.brand]) {
  rawOutput.brand = &quot;&quot;;
}

if (!ocrText) {
  rawOutput.brand = &quot;&quot;;
}

// ...
```

This code checks if the `brand` field in the vision model output is present and not already normalized, then sets it to an empty string. If neither the OCR text nor the vision model output contains a brand, we set it to empty as well.

Note that you may need to adjust this logic based on your specific requirements and data quality assumptions.</pre>
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
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>poblolic de botllons stl sen ct 10 facts calries nutrition csel ciahre settel fa on hae pe ceatrd amoun wh va d ox lnsats carby d nuhencally cr lolel vors sofss fai siees die arach ruceo dl r mle orao on vl b unaa mecies funct calca bals h din nca conogas te lict bulen aane choba st nst uateo ci cuusns t cdrac tiat siourt kom suiknily mik bartk tol na lsu trvv tn</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>5.3 oz (150g)</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Chobani</td></tr>
<tr><th align='left'>VLM Variant</th><td>Nonfat Greek Yogurt</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>tub</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td></td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
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
  &quot;best_catalog_match&quot;: &quot;yogurt&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a close-up of a yogurt container with nutritional information and branding. The text mentions &#x27;Nonfat Greek Yogurt&#x27; and &#x27;Nutrition Facts&#x27;, confirming the product type and size.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
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
<tr><th align='left'>Display Name</th><td>Coca-Cola, 16 oz clamshell</td></tr>
<tr><th align='left'>Confidence</th><td>0.1</td></tr>
<tr><th align='left'>Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Product</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>clamshell</td></tr>
<tr><th align='left'>Package</th><td>16 oz clamshell</td></tr>
<tr><th align='left'>Size</th><td>16 oz</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>anty amen san emnd shen aniten zoo sops aine snav nves</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>16 oz</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td></td></tr>
<tr><th align='left'>VLM Container</th><td>clamshell</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td>clamshell</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.1</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>Brand normalization</li></ul>
      
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
  &quot;container_spec&quot;: &quot;18-cup&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a clamshell container with 18 compartments, likely used for ice cubes or similar items. The OCR text and shortlist candidates are not applicable as there is no relevant text or candidate list provided.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;clamshell&quot;,
  &quot;container_spec&quot;: &quot;18-cup&quot;,
  &quot;size_text&quot;: &quot;16 oz&quot;,
  &quot;confidence&quot;: 0.1,
  &quot;reasons&quot;: [
    &quot;Brand normalization&quot;
  ]
}
```</pre>
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
<tr><th align='left'>Display Name</th><td>single use</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>cup</td></tr>
<tr><th align='left'>Package</th><td>single use</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td></td></tr>
<tr><th align='left'>OCR Engine</th><td>none</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td></td></tr>
<tr><th align='left'>VLM Container</th><td>cup</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td></td></tr>
<tr><th align='left'>Resolver Confidence</th><td></td></tr>
      </table>
      
      <p><strong>Issues</strong></p><ul><li>resolver: HTTPConnectionPool(host=&#x27;127.0.0.1&#x27;, port=11434): Read timed out. (read timeout=30)</li></ul>
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
  &quot;container_spec&quot;: &quot;single use&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a single-use, disposable cup, likely used for beverages.&quot;
}
```</pre>
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
        <tr><th align='left'>Detection</th><td>nothing</td></tr>
<tr><th align='left'>Display Name</th><td>ul, squeeze bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td>ul</td></tr>
<tr><th align='left'>Product</th><td>ul</td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>squeeze bottle</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>culnug unulil</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td></td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td>ul</td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      
      
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
  &quot;evidence&quot;: [&quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a squeeze bottle with a red cap, likely used for condiments or sauces, but the text and barcode are not readable, and there is no clear indication of the product family.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{&quot;brand&quot;: &quot;ul&quot;, &quot;product_variant&quot;: &quot;&quot;, &quot;product_family&quot;: &quot;&quot;, &quot;container_type&quot;: &quot;bottle&quot;, &quot;container_spec&quot;: &quot;squeeze bottle&quot;, &quot;size_text&quot;: &quot;&quot;, &quot;confidence&quot;: 0.0, &quot;reasons&quot;: []}</pre>
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
<tr><th align='left'>Display Name</th><td>me original, dairy, 16 fl oz bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>me</td></tr>
<tr><th align='left'>Product</th><td>me original</td></tr>
<tr><th align='left'>Variant</th><td>original</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>16 fl oz bottle</td></tr>
<tr><th align='left'>Size</th><td>16 fl oz</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>me yogur orig lises problotic ay ars c iglozie suust and</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>16 fl oz</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>me</td></tr>
<tr><th align='left'>VLM Variant</th><td>original</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td></td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;me&quot;,
  &quot;product_variant&quot;: &quot;original&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;16 fl oz&quot;,
  &quot;size_text&quot;: &quot;16 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;yogurt&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a bottle of yogurt with a label indicating it is a dairy product.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}
```

The OCR output and vision model data were analyzed and a decision was made to set `brand` to empty since the generic category word &quot;yogur&quot; was identified in the raw text, but not recognized as a valid brand by the system. The product variant was also unclear due to formatting issues in the OCR text.

Note: The OCR and vision model outputs were used together to make an informed decision about the package information. If either of these sources contained contradictory information, the most reliable source would have been given preference.

Reasons:

- Brand normalization not possible with available data
- Product variant unclear due to formatting issues in OCR output</pre>
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
<tr><th align='left'>Display Name</th><td>recycled</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>recycled</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>scain ecycled ma bottlex r recycle cotne sc</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td></td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td></td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      
      
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
  &quot;container_spec&quot;: &quot;recycled&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;recycled&quot;],
  &quot;notes&quot;: &quot;The image shows a recycled plastic bottle with a red cap and label indicating it is made from recycled material. The OCR text and barcode are not present, and there is no clear indication of the product family or variant.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>Here&#x27;s how you can solve this problem using Python:

```python
import re
from dataclasses import dataclass

@dataclass
class ConsumerPackage:
    brand: str = &quot;&quot;,
    product_variant: str = &quot;&quot;,
    product_family: str = &quot;&quot;,
    container_type: str = &quot;&quot;,
    container_spec: str = &quot;&quot;,
    size_text: str = &quot;&quot;,
    confidence: float = 0.0,
    reasons: list = []

def normalize_brand(brand: str) -&gt; str:
    brand_normalization_rules = {
        &quot;coca-cola&quot;: &quot;Coca-Cola&quot;,
        &quot;mountain dew&quot;: &quot;Mountain Dew&quot;,
        &quot;a-and-w&quot;: &quot;A&amp;W&quot;
        # add more rules as needed
    }

    for rule, value in brand_normalization_rules.items():
        if re.search(r&quot;\b&quot; + re.escape(rule) + r&quot;\b&quot;, brand.lower()):
            return value

    if &quot;and&quot; in brand.lower() and &quot;w&quot; not in brand.lower():
        # A&amp;W
        return &quot;A&amp;W&quot;

    return brand


def normalize_package(ocr_text: str, vision_model_output: dict) -&gt; ConsumerPackage:
    vision_model_output[&quot;brand&quot;] = normalize_brand(vision_model_output[&quot;brand&quot;])
    
    if not vision_model_output[&quot;best_catalog_match&quot;]:
        vision_model_output[&quot;brand&quot;] = &quot;&quot;
    
    container_type = vision_model_output.get(&quot;container_type&quot;, &quot;&quot;)
    if container_type in [&quot;bottle&quot;, &quot;can&quot;, &quot;cup&quot;, &quot;tub&quot;]:
        # Remove generic category words
        vision_model_output[&quot;brand&quot;] = &quot;&quot;

    consumer_package = ConsumerPackage(
        brand=vision_model_output.get(&quot;brand&quot;, &quot;&quot;),
        product_variant=vision_model_output.get(&quot;product_variant&quot;, &quot;&quot;),
        product_family=vision_model_output.get(&quot;product_family&quot;, &quot;&quot;),
        container_type=container_type,
        container_spec=&quot;recycled&quot; if &quot;recycled&quot; in vision_model_output.get(&quot;evidence&quot;, []) else &quot;&quot;,
        size_text=vision_model_output.get(&quot;size_text&quot;, &quot;&quot;),
        confidence=vision_model_output[&quot;confidence&quot;],
        reasons=vision_model_output.get(&quot;notes&quot;, &quot;&quot;).split(&quot;, &quot;)
    )

    return consumer_package


# Example usage:
ocr_text = &quot;scain ecycled ma bottlex r recycle cotne sc&quot;
vision_model_output = {
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;recycled&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [
    &quot;recycled&quot;
  ],
  &quot;notes&quot;: &quot;The image shows a recycled plastic bottle with a red cap and label indicating it is made from recycled material. The OCR text and barcode are not present, and there is no clear indication of the product family or variant.&quot;,
  &quot;raw&quot;: &quot;&quot;&quot;json
  {
    &quot;brand&quot;: &quot;&quot;,
    &quot;product_variant&quot;: &quot;&quot;,
    &quot;product_family&quot;: &quot;&quot;,
    &quot;container_type&quot;: &quot;bottle&quot;,
    &quot;container_spec&quot;: &quot;recycled&quot;,
    &quot;size_text&quot;: &quot;&quot;,
    &quot;best_catalog_match&quot;: &quot;&quot;,
    &quot;confidence&quot;: 0.0,
    &quot;evidence&quot;: [&quot;recycled&quot;],
    &quot;notes&quot;: &quot;The image shows a recycled plastic bottle with a red cap and label indicating it is made from recycled material. The OCR text and barcode are not present, and there is no clear indication of the product family or variant.&quot;
  }
&quot;&quot;&quot;
}

consumer_package = normalize_package(ocr_text, vision_model_output)
print(consumer_package)
```
The `normalize_brand` function checks for brand normalization rules in the given string. If a match is found, it replaces the brand name with the canonical version.

The `normalize_package` function takes OCR text and the raw vision model output as input, normalizes the brand name based on the provided rules, and constructs a consumer package object from the normalized values.</pre>
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
<tr><th align='left'>Display Name</th><td>meijer Yogurt, dairy, 16 fl oz bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>meijer</td></tr>
<tr><th align='left'>Product</th><td>meijer Yogurt</td></tr>
<tr><th align='left'>Variant</th><td>Yogurt</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>16 fl oz bottle</td></tr>
<tr><th align='left'>Size</th><td>16 fl oz</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>m yog poseric cultures de czoo0 16foz aogso borwuse siried</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>16 fl oz</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>meijer</td></tr>
<tr><th align='left'>VLM Variant</th><td>Yogurt</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Yogurt</td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td>dairy</td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;meijer&quot;,
  &quot;product_variant&quot;: &quot;Yogurt&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;16 fl oz&quot;,
  &quot;size_text&quot;: &quot;16 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;yogurt&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a bottle of yogurt with a label indicating it contains live and probiotic cultures.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;Yogurt&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;16 fl oz&quot;,
  &quot;size_text&quot;: &quot;16 fl oz&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: []
}</pre>
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
        <tr><th align='left'>Detection</th><td>weak</td></tr>
<tr><th align='left'>Display Name</th><td>A&amp;W, tub</td></tr>
<tr><th align='left'>Confidence</th><td>0.5</td></tr>
<tr><th align='left'>Brand</th><td>A&amp;W</td></tr>
<tr><th align='left'>Product</th><td>A&amp;W</td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>tub</td></tr>
<tr><th align='left'>Package</th><td>tub</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td></td></tr>
<tr><th align='left'>OCR Engine</th><td>none</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td></td></tr>
<tr><th align='left'>VLM Container</th><td>tub</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td>A&amp;W</td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td>tub</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.5</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>Insufficient OCR text</li></ul>
      
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
  &quot;notes&quot;: &quot;The image shows a close-up of a tub container, likely used for a cosmetic or personal care product, but the OCR text and shortlist candidates are not available.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;A&amp;W&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.5,
  &quot;reasons&quot;: [
    &quot;Insufficient OCR text&quot;
  ]
}
```</pre>
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
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>s</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
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
  &quot;notes&quot;: &quot;The image shows a black, rectangular clamshell container with a ribbed interior, likely used for food storage or takeout.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;clamshell&quot;,
  &quot;container_spec&quot;: &quot;black&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: []
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
<tr><th align='left'>Display Name</th><td>Vinegar, condiment, 1 gallon bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Vinegar</td></tr>
<tr><th align='left'>Product</th><td>Vinegar</td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td>condiment</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>1 gallon bottle</td></tr>
<tr><th align='left'>Size</th><td>1 gallon</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>s ce e s</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>1 gallon</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Vinegar</td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td>condiment</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td></td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Vinegar&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;condiment&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;1 gallon&quot;,
  &quot;best_catalog_match&quot;: &quot;vinegar&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;shape&quot;],
  &quot;notes&quot;: &quot;The label indicates it is vinegar, and the shape and size suggest it is a bottle.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: []
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
        <tr><th align='left'>Detection</th><td>weak</td></tr>
<tr><th align='left'>Display Name</th><td>Mountain Dew, can</td></tr>
<tr><th align='left'>Confidence</th><td>0.5</td></tr>
<tr><th align='left'>Brand</th><td>Mountain Dew</td></tr>
<tr><th align='left'>Product</th><td>Mountain Dew</td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>can</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>s masbunass sijuonn mose s ies s oockin</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td></td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Mountain Dew</td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.5</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>{&#x27;value&#x27;: &quot; OCR text matches known brand name &#x27;s masbunass&#x27; with likely match &#x27;Mountain Dew&#x27;&quot;, &#x27;reason&#x27;: &#x27;likely&#x27;}</li>
<li>{&#x27;value&#x27;: &#x27;Vision model output indicates can with yellow label and logo, consistent with Mountain Dew branding&#x27;, &#x27;reason&#x27;: &#x27;consistent&#x27;}</li></ul>
      
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
  &quot;notes&quot;: &quot;The image shows a can with a yellow label and a logo, but the text on the label is not fully legible. The OCR text &#x27;s masbunass sijuonn mose s ies s oockin&#x27; does not provide clear information about the product family or variant.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```
{
  &quot;brand&quot;: &quot;Mountain Dew&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.5,
  &quot;reasons&quot;: [
    {
      &quot;value&quot;: &quot; OCR text matches known brand name &#x27;s masbunass&#x27; with likely match &#x27;Mountain Dew&#x27;&quot;,
      &quot;reason&quot;: &quot;likely&quot;
    },
    {
      &quot;value&quot;: &quot;Vision model output indicates can with yellow label and logo, consistent with Mountain Dew branding&quot;,
      &quot;reason&quot;: &quot;consistent&quot;
    }
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
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>svn</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td></td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td></td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      
      
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
  &quot;notes&quot;: &quot;The image shows a close-up of a can, likely a beverage can, but the OCR text and shortlist candidates are not providing enough information to identify the brand, product variant, or product family with certainty.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: []
}
```

Explanation:

* The `brand` field is empty as the vision model output did not provide a clear brand match and the OCR text also did not provide enough information to identify the brand.
* Since there was no barcode provided, we cannot determine the exact product variant or family without further information.
* The container type is set to &quot;can&quot; based on the vision model output, but it could be another type if additional evidence was present.
* The size text and best catalog match are empty as they were not present in the vision model output.
* The confidence level for all fields is set to 0.0 as we cannot determine any information with certainty from the provided OCR text and vision model output.

Note: If more data or context was available, additional rules could be applied to improve the normalization of noisy OCR and vision outputs.</pre>
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
<tr><th align='left'>Display Name</th><td>Mt Dew, can</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td>Mt Dew</td></tr>
<tr><th align='left'>Product</th><td>Mt Dew</td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>can</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>eoet bl</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td></td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Mt Dew</td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      
      
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
  &quot;notes&quot;: &quot;The image shows the bottom of a can with a barcode and some text, but the OCR text is not clear and the shortlist candidates and top generic families are not provided.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Mt Dew&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: []
}
```

Explanation of the changes made:

1. The `brand` field was normalized using a custom list of known brand names and their canonical consumer-facing equivalents.
2. Since the OCR text was not clear, we relied on the raw vision model output to infer the correct `brand`, `product_variant`, and `product_family`.
3. We set `container_type` to &quot;can&quot; as per the raw vision model output.
4. The `size_text`, `best_catalog_match`, and other fields were left empty since their values could not be accurately inferred from the provided OCR text and raw vision model output.
5. We included a single reason in the `reasons` field, indicating that the brand was determined using the raw vision model output due to unclear OCR text.

Note: The actual normalization of brand names may require additional data or expertise, so this is just one possible interpretation based on the provided information.</pre>
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
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Lemon Natural, soda, 50 can</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Lemon</td></tr>
<tr><th align='left'>Product</th><td>Lemon Natural</td></tr>
<tr><th align='left'>Variant</th><td>Natural</td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>50 can</td></tr>
<tr><th align='left'>Size</th><td>50</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>jumot nae es sns calor o eilz</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>50</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Lemon</td></tr>
<tr><th align='left'>VLM Variant</th><td>Natural</td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Lemon</td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td>soda</td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>{&#x27;reason&#x27;: &#x27;OCR text and raw vision model output match closely&#x27;}</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Lemon&quot;,
  &quot;product_variant&quot;: &quot;Natural&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;single&quot;,
  &quot;size_text&quot;: &quot;50&quot;,
  &quot;best_catalog_match&quot;: &quot;soda&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a can with a lemon flavor label and a handwritten &#x27;50&#x27; on it, suggesting a 50-ounce size. The OCR text &#x27;jumot nae es sns calor o eilz&#x27; appears to be a mix of letters and numbers, possibly a code or a typo.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;Lemon&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;single&quot;,
  &quot;size_text&quot;: &quot;50&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: [
    {
      &quot;reason&quot;: &quot;OCR text and raw vision model output match closely&quot;
    }
  ]
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
        <tr><th align='left'>Detection</th><td>weak</td></tr>
<tr><th align='left'>Display Name</th><td>Strawberry, body wash, 12 fl oz bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td>Strawberry</td></tr>
<tr><th align='left'>Variant</th><td>Strawberry</td></tr>
<tr><th align='left'>Category</th><td>body wash</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>12 fl oz bottle</td></tr>
<tr><th align='left'>Size</th><td>12 fl oz</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>eao o enayig s s cherequencyor ncedo styemay bloati hichincluces estiwe s discontfort abdomina uascon crumb g s strawberry dim onidds</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>12 fl oz</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>G</td></tr>
<tr><th align='left'>VLM Variant</th><td>Strawberry</td></tr>
<tr><th align='left'>VLM Family</th><td>body wash</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>G</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Strawberry</td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;G&quot;,
  &quot;product_variant&quot;: &quot;Strawberry&quot;,
  &quot;product_family&quot;: &quot;body wash&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;squeeze bottle&quot;,
  &quot;size_text&quot;: &quot;12 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;G Body Wash&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a close-up of a bottle with a label that includes the word &#x27;Strawberry&#x27; and a logo resembling &#x27;G&#x27;. The text on the label appears to be a mix of English and what might be a foreign language, possibly indicating a product description or ingredients. The bottle is a squeeze bottle, which is typical for body washes.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;G&quot;,
  &quot;product_variant&quot;: &quot;Strawberry&quot;,
  &quot;product_family&quot;: &quot;&quot;,
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
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Organic Gum Free, deodorant, 3.5 oz bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Organic</td></tr>
<tr><th align='left'>Product</th><td>Organic Gum Free</td></tr>
<tr><th align='left'>Variant</th><td>Gum Free</td></tr>
<tr><th align='left'>Category</th><td>deodorant</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>3.5 oz bottle</td></tr>
<tr><th align='left'>Size</th><td>3.5 oz</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>es d eganic s none o organes s lers gum gsas dl free ishew onien lolee d d 0 toug so cs s courjoid d t s ctn a stins epasues s dmi magle o s rputa bwo bwororss 8 n v pae o o ce cneo ron e s s sauofed lenn dren sioeg cne ts uopmin s oae a ae 8 e nlim c ameu nido an d</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>3.5 oz</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Organic</td></tr>
<tr><th align='left'>VLM Variant</th><td>Gum Free</td></tr>
<tr><th align='left'>VLM Family</th><td>deodorant</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td></td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Organic&quot;,
  &quot;product_variant&quot;: &quot;Gum Free&quot;,
  &quot;product_family&quot;: &quot;deodorant&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;squeeze bottle&quot;,
  &quot;size_text&quot;: &quot;3.5 oz&quot;,
  &quot;best_catalog_match&quot;: &quot;Organic Deodorant&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a squeeze bottle with a label indicating it is &#x27;Gum Free&#x27; and &#x27;Organic&#x27;, which aligns with the deodorant category.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: []
}
```</pre>
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
<tr><th align='left'>Display Name</th><td>Cashew Mali Unsweetened, coffee drink, 28 fl oz bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Cashew Mali</td></tr>
<tr><th align='left'>Product</th><td>Cashew Mali Unsweetened</td></tr>
<tr><th align='left'>Variant</th><td>Unsweetened</td></tr>
<tr><th align='left'>Category</th><td>coffee drink</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>28 fl oz bottle</td></tr>
<tr><th align='left'>Size</th><td>28 fl oz</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>onganic to fillers orgas gumfree dn cashew mali s organic unsweetened abl co s ae se la e ap ingredients simple 2fl ozil sptise</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>28 fl oz</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Cashew Mali</td></tr>
<tr><th align='left'>VLM Variant</th><td>Unsweetened</td></tr>
<tr><th align='left'>VLM Family</th><td>coffee drink</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Cashew Mali</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Unsweetened</td></tr>
<tr><th align='left'>Resolver Family</th><td>coffee drink</td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>{&#x27;code&#x27;: &#x27;BRAND_NOISE&#x27;, &#x27;text&#x27;: &#x27;Noise in OCR output&#x27;}</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Cashew Mali&quot;,
  &quot;product_variant&quot;: &quot;Unsweetened&quot;,
  &quot;product_family&quot;: &quot;coffee drink&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;28 fl oz&quot;,
  &quot;size_text&quot;: &quot;28 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;coffee creamer&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The product is organic, unsweetened, and contains 4 simple ingredients.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;Cashew Mali&quot;,
  &quot;product_variant&quot;: &quot;Unsweetened&quot;,
  &quot;product_family&quot;: &quot;coffee drink&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;28 fl oz&quot;,
  &quot;size_text&quot;: &quot;28 fl oz&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: [
    {
      &quot;code&quot;: &quot;BRAND_NOISE&quot;,
      &quot;text&quot;: &quot;Noise in OCR output&quot;
    }
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
<tr><th align='left'>Display Name</th><td>Naturade Strawberry, juice, 16 fl oz bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Naturade</td></tr>
<tr><th align='left'>Product</th><td>Naturade Strawberry</td></tr>
<tr><th align='left'>Variant</th><td>Strawberry</td></tr>
<tr><th align='left'>Category</th><td>juice</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>16 fl oz bottle</td></tr>
<tr><th align='left'>Size</th><td>16 fl oz</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>ha gaas note ue strawberry minids bie n soiss ed ivanlvn</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>16 fl oz</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Naturade</td></tr>
<tr><th align='left'>VLM Variant</th><td>Strawberry</td></tr>
<tr><th align='left'>VLM Family</th><td>juice</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td></td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Naturade&quot;,
  &quot;product_variant&quot;: &quot;Strawberry&quot;,
  &quot;product_family&quot;: &quot;juice&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;16 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;juice&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;text&quot;],
  &quot;notes&quot;: &quot;The image shows a close-up of a plastic bottle with a label indicating it is a strawberry-flavored juice.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
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
<tr><th align='left'>Display Name</th><td>cashew organic unsweetened, dairy, 1828 ml bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>cashew</td></tr>
<tr><th align='left'>Product</th><td>cashew organic unsweetened</td></tr>
<tr><th align='left'>Variant</th><td>organic unsweetened</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>1828 ml bottle</td></tr>
<tr><th align='left'>Size</th><td>1828 ml</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>fic crs lgum free cashew mali be organic unsweetened o mnea o on iom e see d ingredients simple 2bflozii non gmo 5 pt1828 ml</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>1828 ml</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>cashew</td></tr>
<tr><th align='left'>VLM Variant</th><td>organic unsweetened</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td></td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;cashew&quot;,
  &quot;product_variant&quot;: &quot;organic unsweetened&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;28 fl oz (1.75 pt) (828 ml)&quot;,
  &quot;size_text&quot;: &quot;28 fl oz (1.75 pt) (828 ml)&quot;,
  &quot;best_catalog_match&quot;: &quot;coffee creamer&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The product is labeled as &#x27;cashew milk&#x27; which is a dairy alternative, but the container is labeled as a coffee creamer, which is a dairy product. The OCR text confirms the product is organic and unsweetened, which aligns with a dairy alternative. The container type and size suggest it is a bottle, which is common for dairy alternatives.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
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
<tr><th align='left'>Display Name</th><td>La Croix, sparkling water, single cropped recyclable container</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>La Croix</td></tr>
<tr><th align='left'>Product</th><td>La Croix</td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td>sparkling water</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>single cropped recyclable container</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>warar t hoax s akling s ua s won natura essene cent 0 s d sonm s</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>La Croix</td></tr>
<tr><th align='left'>VLM Variant</th><td>Sparkling Water</td></tr>
<tr><th align='left'>VLM Family</th><td>sparkling water</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>La Croix</td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;La Croix&quot;,
  &quot;product_variant&quot;: &quot;Sparkling Water&quot;,
  &quot;product_family&quot;: &quot;sparkling water&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;single cropped recyclable container&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;La Croix Sparkling Water&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a can of La Croix sparkling water with the brand name and product description clearly visible.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>Here is the JSON output after normalization:

```
{
  &quot;brand&quot;: &quot;La Croix&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;single cropped recyclable container&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}
```

I applied the following rules:

1. Normalized the OCR text to a more readable format: `warar t hoax s akling s ua s won natura essene cent 0 s d sonm s` -&gt; `La Croix`.
2. Set the brand to La Croix, as it is clearly identifiable from the vision model output.
3. Set product_variant and product_family to empty, as they were not provided in the OCR text or vision model output.
4. Confirmed that container_type is indeed a can, which matches the vision model output.
5. Confirmed that container_spec is a single cropped recyclable container, which also matches the vision model output.
6. Set size_text to an empty string, as it was not provided in either the OCR text or vision model output.
7. Set confidence to 0.9, based on the confidence score from the vision model output.

The reason for preferring La Croix over other potential brands is that the OCR text and vision model output both clearly indicate that the brand is La Croix. If there were any ambiguity or uncertainty in these sources, I would have set the brand to empty, as per the rules.</pre>
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
<tr><th align='left'>Display Name</th><td>Mountain Dew, can</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td>Mountain Dew</td></tr>
<tr><th align='left'>Product</th><td>Mountain Dew</td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>can</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td></td></tr>
<tr><th align='left'>OCR Engine</th><td>none</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td></td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Mountain Dew</td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      
      
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
  &quot;notes&quot;: &quot;The image shows a metallic, cylindrical container with a pull-tab, which is characteristic of a can. The lack of visible branding or text makes it difficult to determine the specific product family or variant.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;Mountain Dew&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: []
}</pre>
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
<tr><th align='left'>Display Name</th><td>International Delight French Vanilla, coffee creamer, 32 fl oz bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>International Delight</td></tr>
<tr><th align='left'>Product</th><td>International Delight French Vanilla</td></tr>
<tr><th align='left'>Variant</th><td>French Vanilla</td></tr>
<tr><th align='left'>Category</th><td>coffee creamer</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>32 fl oz bottle</td></tr>
<tr><th align='left'>Size</th><td>32 fl oz</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>e s s weor ne</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>32 fl oz</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>International Delight</td></tr>
<tr><th align='left'>VLM Variant</th><td>French Vanilla</td></tr>
<tr><th align='left'>VLM Family</th><td>coffee creamer</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>International Delight</td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
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
  &quot;product_variant&quot;: &quot;French Vanilla&quot;,
  &quot;product_family&quot;: &quot;coffee creamer&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;squeeze bottle&quot;,
  &quot;size_text&quot;: &quot;32 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;coffee creamer&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a bottle of International Delight French Vanilla coffee creamer, which is a common type of coffee creamer used to enhance the flavor of coffee. The bottle is designed for easy pouring, which is indicated by the squeeze bottle shape.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;International Delight&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
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
<tr><th align='left'>Display Name</th><td>single</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>clamshell</td></tr>
<tr><th align='left'>Package</th><td>single</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>d</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
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
  &quot;container_spec&quot;: &quot;single&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a single, empty, transparent clamshell container, likely used for food or other items. The lack of branding, product information, or additional context makes it difficult to determine the specific product family or variant.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;clamshell&quot;,
  &quot;container_spec&quot;: &quot;single&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: []
}</pre>
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
<tr><th align='left'>Display Name</th><td>can</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>can</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>e</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td></td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td></td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      
      
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
  &quot;notes&quot;: &quot;The image shows a yellow can with a curved shape, which is typical for beverages. However, the OCR text and shortlist candidates are not available, making it difficult to identify the specific product family or variant.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>Here&#x27;s how you could normalize these noisy OCR outputs to produce JSON that fits your requirements.

Firstly, we will create a dictionary of known brand names for our known brands. This can be pre-populated in advance based on the data available and can also be populated as part of any future data collection or updates.

```python
known_brands = {
    &quot;Coca-Cola&quot;: &quot;Coca-Cola&quot;,
    &quot;Mountain Dew&quot;: &quot;Mountain Dew&quot;,
    &quot;A&amp;W&quot;: &quot;A&amp;W&quot;
}

# OCR text will be an empty string here, but we use this variable to access known brand names from the dictionary of known brands.
ocr_text = &quot;&quot;
```

We then define a function that uses this dictionary and the raw vision model output to determine the normalized `brand` string:

```python
def normalize_brand(raw_model_output):
    # We need to find the best brand name. This is where we use OCR text along with the raw model output.
    brand = raw_model_output.get(&#x27;best_catalog_match&#x27;)
    
    # If there&#x27;s an OCR text, we add that to the brand name if it matches one of our known brands.
    if ocr_text:
        for known_brand in known_brands:
            if f&quot;{known_brand} - {ocr_text}&quot; == brand and known_brand not in raw_model_output.get(&#x27;brand&#x27;, &quot;&quot;):
                # Here we check that the OCR text does indeed match a known brand name, but also that it&#x27;s not already listed as part of the brand.
                return known_brands[known_brand]
    
    # We now prefer to find any known brand name from our dictionary. If there is none, or if it doesn&#x27;t look like a brand, we default to empty string.
    global known_brands
    for key, value in known_brands.items():
        if f&quot;{value} - {ocr_text}&quot; == raw_model_output.get(&#x27;brand&#x27;, &quot;&quot;):
            return value
    
    # If there&#x27;s no matching brand name and the OCR text doesn&#x27;t match any of our known brands, we default to empty string.
    return &quot;&quot;
```

Now that we&#x27;ve defined this function, let&#x27;s apply it:

```python
raw_vision_model_output = {
    &quot;brand&quot;: &quot;&quot;,
    &quot;product_variant&quot;: &quot;&quot;,
    &quot;product_family&quot;: &quot;&quot;,
    &quot;container_type&quot;: &quot;can&quot;,
    &quot;container_spec&quot;: &quot;&quot;,
    &quot;size_text&quot;: &quot;&quot;,
    &quot;best_catalog_match&quot;: &quot;&quot;,
    &quot;confidence&quot;: 0.0,
    &quot;evidence&quot;: [
        &quot;shape&quot;
    ],
    &quot;notes&quot;: &quot;The image shows a yellow can with a curved shape, which is typical for beverages. However, the OCR text and shortlist candidates are not available, making it difficult to identify the specific product family or variant.&quot;,
    &quot;raw&quot;: &quot;```json\n{\n  \&quot;brand\&quot;: \&quot;\&quot;,\n  \&quot;product_variant\&quot;: \&quot;\&quot;,\n  \&quot;product_family\&quot;: \&quot;\&quot;,\n  \&quot;container_type\&quot;: \&quot;can\&quot;,\n  \&quot;container_spec\&quot;: \&quot;\&quot;,\n  \&quot;size_text\&quot;: \&quot;\&quot;,\n  \&quot;best_catalog_match\&quot;: \&quot;\&quot;,\n  \&quot;confidence\&quot;: 0.0,\n  \&quot;evidence\&quot;: [\&quot;shape\&quot;],\n  \&quot;notes\&quot;: \&quot;The image shows a yellow can with a curved shape, which is typical for beverages. However, the OCR text and shortlist candidates are not available, making it difficult to identify the specific product family or variant.\&quot;\n}\n```&quot;
}

normalized_model_output = {
    &quot;brand&quot;: normalize_brand(raw_vision_model_output),
    &quot;product_variant&quot;: raw_vision_model_output.get(&#x27;product_variant&#x27;, &#x27;&#x27;),
    &quot;product_family&quot;: raw_vision_model_output.get(&#x27;product_family&#x27;, &#x27;&#x27;),
    &quot;container_type&quot;: raw_vision_model_output[&#x27;container_type&#x27;],
    &quot;container_spec&quot;: raw_vision_model_output[&#x27;container_spec&#x27;],
    &quot;size_text&quot;: raw_vision_model_output[&#x27;size_text&#x27;],
    &quot;confidence&quot;: raw_vision_model_output[&#x27;confidence&#x27;],
    &quot;reasons&quot;: []
}
```

Finally, we can print out the normalized JSON data:

```python
import json

print(json.dumps(normalized_model_output, indent=4))
# Output:
# {
#     &quot;brand&quot;: &quot;Mountain Dew&quot;,
#     &quot;product_variant&quot;: &quot;&quot;,
#     &quot;product_family&quot;: &quot;&quot;,
#     &quot;container_type&quot;: &quot;can&quot;,
#     &quot;container_spec&quot;: &quot;&quot;,
#     &quot;size_text&quot;: &quot;&quot;,
#     &quot;confidence&quot;: 0.0,
#     &quot;reasons&quot;: []
# }
```

In this case, the OCR text matches a known brand name (`&quot;Mountain Dew&quot;`), and so we default to using that as the normalized `brand` string.</pre>
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
<tr><th align='left'>Display Name</th><td>Deer Park Sparkling Water, water, 16.9 fl oz bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Deer Park</td></tr>
<tr><th align='left'>Product</th><td>Deer Park Sparkling Water</td></tr>
<tr><th align='left'>Variant</th><td>Sparkling Water</td></tr>
<tr><th align='left'>Category</th><td>water</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>16.9 fl oz bottle</td></tr>
<tr><th align='left'>Size</th><td>16.9 fl oz</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>d e z g s e deer park tsea</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>16.9 fl oz</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>deer park</td></tr>
<tr><th align='left'>VLM Variant</th><td>sparkling water</td></tr>
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
  &quot;brand&quot;: &quot;deer park&quot;,
  &quot;product_variant&quot;: &quot;sparkling water&quot;,
  &quot;product_family&quot;: &quot;water&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;16.9 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;deer park sparkling water&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;shape&quot;],
  &quot;notes&quot;: &quot;The label and shape of the bottle are consistent with a typical plastic water bottle.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Deer Park&quot;,
  &quot;product_variant&quot;: &quot;Sparkling Water&quot;,
  &quot;product_family&quot;: &quot;Water&quot;,
  &quot;container_type&quot;: &quot;Bottle&quot;,
  &quot;container_spec&quot;: &quot;Plastic&quot;,
  &quot;size_text&quot;: &quot;16.9 fl oz&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}
```

Note: The OCR text `d e z g s e deer park tsea` has been processed to extract the brand name, which is then used in conjunction with the raw vision model output to determine the final product information. Since the barcode was not provided, no additional information about the package&#x27;s contents or other attributes could be determined.

If the OCR text contained a generic category word like &quot;yogurt&quot;, &quot;soda&quot;, etc., it would be ignored and `brand` set to an empty string to avoid hallucinating unnecessary details.</pre>
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
<tr><th align='left'>Display Name</th><td>Mali Unsweetened, coffee creamer, 28 FL OZ (1.75 PT) (828 ml) bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Mali</td></tr>
<tr><th align='left'>Product</th><td>Mali Unsweetened</td></tr>
<tr><th align='left'>Variant</th><td>Unsweetened</td></tr>
<tr><th align='left'>Category</th><td>coffee creamer</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>28 FL OZ (1.75 PT) (828 ml) bottle</td></tr>
<tr><th align='left'>Size</th><td>28 FL OZ (1.75 PT) (828 ml)</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>iulers e s e s o s o e ingredients e s s eer park sa e c s</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>28 FL OZ (1.75 PT) (828 ml)</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Mali</td></tr>
<tr><th align='left'>VLM Variant</th><td>Unsweetened</td></tr>
<tr><th align='left'>VLM Family</th><td>coffee creamer</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td></td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
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
  &quot;container_spec&quot;: &quot;28 FL OZ (1.75 PT) (828 ml)&quot;,
  &quot;size_text&quot;: &quot;28 FL OZ (1.75 PT) (828 ml)&quot;,
  &quot;best_catalog_match&quot;: &quot;coffee creamer&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The container is labeled as &#x27;organic&#x27; and &#x27;unsweetened&#x27;, which are common attributes for coffee creamers. The size and shape are consistent with a bottle used for liquid products.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>Here&#x27;s the normalized JSON data based on your provided rules:

```
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: []
}
```

This is because the raw vision model output has better confidence (0.8) and evidence for the specific product, but when we also consider the OCR text, neither of them can identify a clear brand name that isn&#x27;t a generic category word like &#x27;bottle&#x27; or &#x27;cup&#x27;.</pre>
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
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>tol unte s ino moe snoey ugin</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td></td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td></td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      
      
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
  &quot;notes&quot;: &quot;The image shows a yellow can with a label, but the text is not clear enough to identify the brand or product family. The shape suggests it could be a beverage can.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: []
}
```</pre>
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
<tr><th align='left'>Display Name</th><td>Deer Park Spring Water, water, 16.9 fl oz bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Deer Park</td></tr>
<tr><th align='left'>Product</th><td>Deer Park Spring Water</td></tr>
<tr><th align='left'>Variant</th><td>Spring Water</td></tr>
<tr><th align='left'>Category</th><td>water</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>16.9 fl oz bottle</td></tr>
<tr><th align='left'>Size</th><td>16.9 fl oz</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>s q e o e e jeer park i lisa</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>16.9 fl oz</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Deer Park</td></tr>
<tr><th align='left'>VLM Variant</th><td>Spring Water</td></tr>
<tr><th align='left'>VLM Family</th><td>water</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Deer Park</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Spring Water</td></tr>
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
  &quot;brand&quot;: &quot;Deer Park&quot;,
  &quot;product_variant&quot;: &quot;Spring Water&quot;,
  &quot;product_family&quot;: &quot;water&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;16.9 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;Deer Park Spring Water&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;shape&quot;],
  &quot;notes&quot;: &quot;The bottle is a standard plastic water bottle with a label indicating it is Deer Park Spring Water.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>Here&#x27;s the normalized JSON output:

```
{
  &quot;brand&quot;: &quot;Deer Park&quot;,
  &quot;product_variant&quot;: &quot;Spring Water&quot;,
  &quot;product_family&quot;: &quot;water&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;16.9 fl oz&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}
```

The OCR text provided did not contain a clear brand name, but the raw vision model output contained a strong match for Deer Park Spring Water. Given the high confidence in this match (0.9), and considering that the product variant and family are already identified, we can trust this as the normalized output.

If you&#x27;d like to perform additional checks or normalizations on the brand name, please let me know!</pre>
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
<tr><th align='left'>Display Name</th><td>Cashew Unsweetened, dairy, 28 FL OZ (1.75 PT) (828 mL) bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Cashew</td></tr>
<tr><th align='left'>Product</th><td>Cashew Unsweetened</td></tr>
<tr><th align='left'>Variant</th><td>Unsweetened</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>28 FL OZ (1.75 PT) (828 mL) bottle</td></tr>
<tr><th align='left'>Size</th><td>28 FL OZ (1.75 PT) (828 mL)</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>pp 5 polypropylene</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>e s g o co d s s ingredients e s s s jeer s park 6 e s</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>28 FL OZ (1.75 PT) (828 mL)</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Cashew</td></tr>
<tr><th align='left'>VLM Variant</th><td>Unsweetened</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td></td></tr>
<tr><th align='left'>Resolver Confidence</th><td></td></tr>
      </table>
      
      <p><strong>Issues</strong></p><ul><li>resolver: HTTPConnectionPool(host=&#x27;127.0.0.1&#x27;, port=11434): Read timed out. (read timeout=30)</li></ul>
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Cashew&quot;,
  &quot;product_variant&quot;: &quot;Unsweetened&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;28 FL OZ (1.75 PT) (828 mL)&quot;,
  &quot;size_text&quot;: &quot;28 FL OZ (1.75 PT) (828 mL)&quot;,
  &quot;best_catalog_match&quot;: &quot;coffee creamer&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The product is labeled as &#x27;cashew milk&#x27; and &#x27;organic&#x27;, which aligns with dairy products. The container is a bottle, and the size is 28 FL OZ, which is a common size for coffee creamers.&quot;
}
```</pre>
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
<tr><th align='left'>Display Name</th><td>Downy Rinse &amp; Fresh, dish soap, 10 fl oz bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Downy</td></tr>
<tr><th align='left'>Product</th><td>Downy Rinse &amp; Fresh</td></tr>
<tr><th align='left'>Variant</th><td>Rinse &amp; Fresh</td></tr>
<tr><th align='left'>Category</th><td>dish soap</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>10 fl oz bottle</td></tr>
<tr><th align='left'>Size</th><td>10 fl oz</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>colzlloz sreoprrows sinaicteen nee s oy fl lmon wres ais cris wssnnp e sdom s tuinee enouia socsosnano aunoc saag moh o onisnes es snormon hsedeed 5 humoa basnid asn oiaave g asnid</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>10 fl oz</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Downy</td></tr>
<tr><th align='left'>VLM Variant</th><td>Rinse &amp; Fresh</td></tr>
<tr><th align='left'>VLM Family</th><td>dish soap</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Downy</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Rinse &amp; Fresh</td></tr>
<tr><th align='left'>Resolver Family</th><td>dish soap</td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>Raw vision model output matches brand and product information.</li>
<li>OCR text contains relevant keywords.</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Downy&quot;,
  &quot;product_variant&quot;: &quot;Rinse &amp; Fresh&quot;,
  &quot;product_family&quot;: &quot;dish soap&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;squeeze bottle&quot;,
  &quot;size_text&quot;: &quot;10 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;dish soap&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;shape&quot;],
  &quot;notes&quot;: &quot;The label indicates it is a Downy product, which is typically used for dish washing, and the shape and size suggest it is a squeeze bottle.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;Downy&quot;,
  &quot;product_variant&quot;: &quot;Rinse &amp; Fresh&quot;,
  &quot;product_family&quot;: &quot;dish soap&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;squeeze bottle&quot;,
  &quot;size_text&quot;: &quot;10 fl oz&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: [
    &quot;Raw vision model output matches brand and product information.&quot;,
    &quot;OCR text contains relevant keywords.&quot;
  ]
}</pre>
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
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>daisy cree brand natud sour 6 azeal pure 3lbs</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>3 lbs (1.36kg)</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Daisy</td></tr>
<tr><th align='left'>VLM Variant</th><td>Sour Cream</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>tub</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td></td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>{&#x27;description&#x27;: &#x27; OCR text and raw vision model output did not match exactly, but the vision model was more confident (90%)&#x27;, &#x27;code&#x27;: None}</li></ul>
      
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
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The container is a tub used for storing sour cream, as indicated by the text on the label.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: [
    {
      &quot;description&quot;: &quot; OCR text and raw vision model output did not match exactly, but the vision model was more confident (90%)&quot;,
      &quot;code&quot;: null
    }
  ]
}
```

This JSON object represents the normalized consumer-facing package details.

Key Normalizations:
- The brand has been set to an empty string since the raw vision model output had a best catalog match and OCR text did not match exactly. The evidence from both sources points towards &quot;Daisy&quot;, but there was no direct confirmation.
- The product variant is not explicitly mentioned in either source, so it remains empty.
- The product family has been set to an empty string as the raw vision model output specifies a generic category (&quot;dairy&quot;), and OCR text did not provide any details on this topic.</pre>
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
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td></td></tr>
<tr><th align='left'>OCR Engine</th><td>none</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td></td></tr>
<tr><th align='left'>VLM Container</th><td>tub</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td></td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      
      
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
  &quot;notes&quot;: &quot;The image shows a white, rectangular container with a rounded corner, suggesting it is a tub or a similar type of container. The lack of branding, product information, or barcode makes it difficult to identify the specific product family or variant.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>Here&#x27;s how you could implement this using Python:

```python
import json

# Define the brand normalization rules
brand_normalization_rules = {
    &quot;Mt Dew&quot;: &quot;Mountain Dew&quot;,
    &quot;A and W&quot;: &quot;A&amp;W&quot;,
    # Add more brand normalizations as needed
}

def normalize_brand(ocr_text, vision_output):
    # If OCR text is available, use it to determine the brand
    if ocr_text:
        return ocr_text

    # If both OCR and raw output are provided, try to extract the brand from them
    if vision_output[&#x27;raw&#x27;]:
        json_data = json.loads(vision_output[&#x27;raw&#x27;])
        
        # Look for a &#x27;brand&#x27; field in the JSON data
        if &#x27;brand&#x27; in json_data:
            return json_data[&#x27;brand&#x27;]
            
        # If no &#x27;brand&#x27; field is found, try to normalize any text that might be related to the brand
        for text in vision_output.get(&#x27;evidence&#x27;, []):
            for rule, replacement in brand_normalization_rules.items():
                if text.lower() == rule.lower():
                    return replacement
                    
    # If none of the above works, default to empty string
    return &quot;&quot;

def normalize_product_info(vision_output):
    normalized_info = {
        &quot;brand&quot;: &quot;&quot;,
        &quot;product_variant&quot;: &quot;&quot;,
        &quot;product_family&quot;: &quot;&quot;,
        &quot;container_type&quot;: vision_output.get(&quot;container_type&quot;, &quot;&quot;),
        &quot;container_spec&quot;: vision_output.get(&quot;container_spec&quot;, &quot;&quot;),
        &quot;size_text&quot;: vision_output.get(&quot;size_text&quot;, &quot;&quot;),
        &quot;confidence&quot;: 0.0
    }

    # Look for a &#x27;best_catalog_match&#x27; field in the JSON data
    if &#x27;best_catalog_match&#x27; in vision_output:
        normalized_info[&#x27;brand&#x27;] = vision_output[&#x27;best_catalog_match&#x27;]
        
    return normalized_info

def normalize_noisy_ocr(vision_output):
    ocr_text = &quot;&quot;
    if &quot;OCR TEXT&quot; in vision_output:
        # Replace this line with your actual OCR processing logic
        pass
    
    raw_json_data = json.loads(vision_output[&quot;RAW VISION MODEL OUTPUT&quot;])
    reasons = []
    
    # Look for a &#x27;notes&#x27; field in the JSON data
    if &#x27;notes&#x27; in raw_json_data:
        reason = &quot;Insufficient information to make a determination.&quot;
        
        if &quot;shape&quot; in raw_json_data[&#x27;evidence&#x27;]:
            reason += &quot;, visual shape analysis suggests it may be a tub&quot;
            
        reasons.append(reason)
        
    return {
        &quot;brand&quot;: normalize_brand(ocr_text, vision_output),
        &quot;product_variant&quot;: &quot;&quot;,
        &quot;product_family&quot;: &quot;&quot;,
        &quot;container_type&quot;: normalized_info[&quot;container_type&quot;],
        &quot;container_spec&quot;: normalized_info[&quot;container_spec&quot;],
        &quot;size_text&quot;: normalized_info[&quot;size_text&quot;],
        &quot;confidence&quot;: normalized_info[&quot;confidence&quot;],
        &quot;reasons&quot;: reasons
    }

# Assume the vision_output contains the raw JSON data and OCR text
vision_output = {
    &quot;RAW VISION MODEL OUTPUT&quot;: &quot;&quot;&quot;{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [
    &quot;shape&quot;
  ],
  &quot;notes&quot;: &quot;The image shows a white, rectangular container with a rounded corner, suggesting it is a tub or a similar type of container. The lack of branding, product information, or barcode makes it difficult to identify the specific product family or variant.&quot;,
}\n&quot;&quot;&quot;,
    &quot;OCR TEXT&quot;: &quot;None&quot;
}

# Normalize the noisy OCR output
output = normalize_noisy_ocr(vision_output)

print(json.dumps(output, indent=4))
```
This script will print a JSON representation of the normalized brand information.</pre>
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
        <tr><th align='left'>Detection</th><td>nothing</td></tr>
<tr><th align='left'>Display Name</th><td>Spring Water, water, 0 can</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td>Spring Water</td></tr>
<tr><th align='left'>Variant</th><td>Spring Water</td></tr>
<tr><th align='left'>Category</th><td>water</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>0 can</td></tr>
<tr><th align='left'>Size</th><td>0</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>st e nor s e s s cas</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>0</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Nature&#x27;s Promise</td></tr>
<tr><th align='left'>VLM Variant</th><td>Spring Water</td></tr>
<tr><th align='left'>VLM Family</th><td>water</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td></td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
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
  &quot;size_text&quot;: &quot;0&quot;,
  &quot;best_catalog_match&quot;: &quot;soda&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image appears to be a cropped view of a can, likely a beverage container, with the text &#x27;Spring Water&#x27; and &#x27;Nature&#x27;s Promise&#x27; visible. The size &#x27;0&#x27; suggests it might be a small can, possibly a 12-ounce size, but the exact size is not clear from the image alone.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
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
<tr><th align='left'>Display Name</th><td>Downy Deep Clean &amp; Refresh Fabric Rinse, fabric softener, 1.62L bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Downy</td></tr>
<tr><th align='left'>Product</th><td>Downy Deep Clean &amp; Refresh Fabric Rinse</td></tr>
<tr><th align='left'>Variant</th><td>Deep Clean &amp; Refresh Fabric Rinse</td></tr>
<tr><th align='left'>Category</th><td>fabric softener</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>1.62L bottle</td></tr>
<tr><th align='left'>Size</th><td>1.62L</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>oe m eronous unsiosed snonimon f unsinss s ts suneo oines dbo moh onisnvs s o wous se hsedeed ssnolmoh ol usdae sauns humoa sesnid asn usnos elnev snousysuimg spson punos sope nodpus s isnia dne</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>1.62L</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Downy</td></tr>
<tr><th align='left'>VLM Variant</th><td>Deep Clean &amp; Refresh Fabric Rinse</td></tr>
<tr><th align='left'>VLM Family</th><td>fabric softener</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td></td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Downy&quot;,
  &quot;product_variant&quot;: &quot;Deep Clean &amp; Refresh Fabric Rinse&quot;,
  &quot;product_family&quot;: &quot;fabric softener&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;squeezable&quot;,
  &quot;size_text&quot;: &quot;1.62L&quot;,
  &quot;best_catalog_match&quot;: &quot;Downy Deep Clean &amp; Refresh Fabric Rinse&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;product_family&quot;, &quot;container_type&quot;],
  &quot;notes&quot;: &quot;The image shows a bottle of Downy fabric rinse with a label indicating it is a fabric rinse product.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
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
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>dais brand ch sour natun 9 blosfisky pure</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>3 lbs (1.36kg)</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Daisy</td></tr>
<tr><th align='left'>VLM Variant</th><td>Sour Cream</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>tub</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td></td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>{&#x27;value&#x27;: &#x27;Noisy OCR output&#x27;, &#x27;description&#x27;: &#x27;OCR text contained noisy information&#x27;}</li>
<li>{&#x27;value&#x27;: &#x27;Raw vision model output mismatch&#x27;, &#x27;description&#x27;: &#x27;Vision model output did not match expected values&#x27;}</li></ul>
      
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
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: [
    {
      &quot;value&quot;: &quot;Noisy OCR output&quot;,
      &quot;description&quot;: &quot;OCR text contained noisy information&quot;
    },
    {
      &quot;value&quot;: &quot;Raw vision model output mismatch&quot;,
      &quot;description&quot;: &quot;Vision model output did not match expected values&quot;
    }
  ]
}</pre>
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
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>vnie s land e g aadins y</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>1.5 L</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Acti</td></tr>
<tr><th align='left'>VLM Variant</th><td>Strawberry</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td></td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
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
  &quot;container_spec&quot;: &quot;jug&quot;,
  &quot;size_text&quot;: &quot;1.5 L&quot;,
  &quot;best_catalog_match&quot;: &quot;yogurt&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a jug of Acti yogurt with a strawberry flavor, as indicated by the text and imagery on the label.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
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
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Nature&#x27;s Promise</td></tr>
<tr><th align='left'>Product</th><td>Nature&#x27;s Promise Spring Water</td></tr>
<tr><th align='left'>Variant</th><td>Spring Water</td></tr>
<tr><th align='left'>Category</th><td>water</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>12 FL OZ (355ml) can</td></tr>
<tr><th align='left'>Size</th><td>12 FL OZ (355ml)</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>o s s g s s s</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>12 FL OZ (355ml)</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Nature&#x27;s Promise</td></tr>
<tr><th align='left'>VLM Variant</th><td>Spring Water</td></tr>
<tr><th align='left'>VLM Family</th><td>water</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td></td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
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
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a can of spring water with a green and white label, indicating it is a recyclable container.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}
```

This result was derived from the provided OCR text and raw vision model output, as well as applying normalization rules to ensure a clean consumer-facing brand name.

- The OCR output (&quot;o s s g s s s&quot;) is not directly usable for brand identification due to its ambiguity.
- Using the raw vision model output:
  - The brand was correctly identified as &quot;Nature&#x27;s Promise&quot;.
  - However, further processing revealed that this was likely a misidentification based on the text provided in the &quot;notes&quot; field. The description mentions &quot;green and white label&quot;, but our actual product is more accurately described by a logo without specific color information.
- To handle these cases, I decided to use the OCR output as the basis for brand identification, rather than relying solely on vision model results, because no clear brand name was provided in the raw data, and the best catalog match is not clearly identifiable.</pre>
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
<tr><th align='left'>Display Name</th><td>Limoncello, sparkling water, 0 CALOR can</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Limoncello</td></tr>
<tr><th align='left'>Product</th><td>Limoncello</td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td>sparkling water</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>0 CALOR can</td></tr>
<tr><th align='left'>Size</th><td>0 CALOR</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>saaal limon ng waer natur essenc co d lg lg or swee</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>0 CALOR</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
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
  &quot;container_spec&quot;: &quot;single cropped recyclable container&quot;,
  &quot;size_text&quot;: &quot;0 CALOR&quot;,
  &quot;best_catalog_match&quot;: &quot;sparkling water&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a can of Limoncello Sparkling Water with a logo and text indicating it is naturally essence.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>Here&#x27;s the normalized JSON output based on the provided rules:

```
{
  &quot;brand&quot;: &quot;Limoncello&quot;,
  &quot;product_variant&quot;: &quot;Sparkling Water&quot;,
  &quot;product_family&quot;: &quot;sparkling water&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;single cropped recyclable container&quot;,
  &quot;size_text&quot;: &quot;0 CALOR&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}
```

This output includes the normalized brand, product variant, and other relevant details from both OCR text and raw vision model output, with `brand` set to &quot;Limoncello&quot; as per the provided normalization rules.</pre>
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
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td></td></tr>
<tr><th align='left'>OCR Engine</th><td>none</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td></td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td></td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      
      
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
  &quot;notes&quot;: &quot;The image shows a circular, flat, and smooth surface, which is typical of a plastic bottle cap or a lid. However, the lack of branding, size text, or additional context makes it difficult to determine the exact product family or variant.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>Here&#x27;s how you could normalize noisy OCR and vision outputs for a single consumer package based on the given rules:

```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: []
}

```

This function will be able to handle noisy OCR and vision outputs for a single consumer package based on the given rules:

```python
import json

# Define normalizations of brand strings to canonical consumer-facing names
brand_normalizations = {
    &quot;Coke&quot;: &quot;Coca-Cola&quot;,
    &quot;Mt Dew&quot;: &quot;Mountain Dew&quot;,
    &quot;A and W&quot;: &quot;A&amp;W&quot;
}

def normalize_package(ocr_text, raw_vision_model_output):
  global brand_normalizations
    
  # Initialize the normalized package details with empty strings
  normalized_package = {
      &quot;brand&quot;: &quot;&quot;,
      &quot;product_variant&quot;: &quot;&quot;,
      &quot;product_family&quot;: &quot;&quot;,
      &quot;container_type&quot;: &quot;&quot;,
      &quot;container_spec&quot;: &quot;&quot;,
      &quot;size_text&quot;: &quot;&quot;,
      &quot;confidence&quot;: 0.0,
      &quot;reasons&quot;: []
  }

  # Check if raw vision model output contains brand string
  for key, value in raw_vision_model_output.items():
    if isinstance(value, str):
      # If the brand string is present in the OCR text and not empty, normalize it
      if ocr_text.strip() != &quot;&quot; and value.strip() != &quot;&quot;:
        normalized_package[&quot;brand&quot;] = brand_normalizations.get(value, &quot;Unknown&quot;)
        
  # Check generic categories word
  generic_categories = [&quot;yogurt&quot;, &quot;soda&quot;, &quot;juice&quot;, &quot;bottle&quot;, &quot;can&quot;, &quot;cup&quot;, &quot;tub&quot;]
  for key, value in raw_vision_model_output.items():
    if isinstance(value, str):
      # If a generic category word is present in the normalized brand string, set it to empty
      if value.strip() in generic_categories and normalized_package[&quot;brand&quot;] != &quot;&quot;:
        normalized_package[&quot;brand&quot;] = &quot;&quot;
        
  return json.dumps(normalized_package)

# Example usage:
ocr_text = &quot;None&quot;
raw_vision_model_output = {
    &quot;brand&quot;: &quot;&quot;,
    &quot;product_variant&quot;: &quot;&quot;,
    &quot;product_family&quot;: &quot;&quot;,
    &quot;container_type&quot;: &quot;bottle&quot;,
    &quot;container_spec&quot;: &quot;plastic&quot;,
    &quot;size_text&quot;: &quot;&quot;,
    &quot;best_catalog_match&quot;: &quot;&quot;,
    &quot;confidence&quot;: 0.0,
    &quot;evidence&quot;: [
        &quot;shape&quot;
    ],
    &quot;notes&quot;: &quot;The image shows a circular, flat, and smooth surface, which is typical of a plastic bottle cap or a lid. However, the lack of branding, size text, or additional context makes it difficult to determine the exact product family or variant.&quot;,
    &quot;raw&quot;: &quot;&quot;&quot;{
      &quot;brand&quot;: &quot;&quot;,
      &quot;product_variant&quot;: &quot;&quot;,
      &quot;product_family&quot;: &quot;&quot;,
      &quot;container_type&quot;: &quot;bottle&quot;,
      &quot;container_spec&quot;: &quot;plastic&quot;,
      &quot;size_text&quot;: &quot;&quot;,
      &quot;best_catalog_match&quot;: &quot;&quot;,
      &quot;confidence&quot;: 0.0,
      &quot;evidence&quot;: [&quot;shape&quot;],
      &quot;notes&quot;: &quot;The image shows a circular, flat, and smooth surface, which is typical of a plastic bottle cap or a lid. However, the lack of branding, size text, or additional context makes it difficult to determine the exact product family or variant.&quot;,
    }&quot;&quot;&quot;
}

normalized_package = normalize_package(ocr_text, raw_vision_model_output)
print(normalized_package)

```

This will be able to handle noisy OCR and vision outputs for a single consumer package based on the given rules.</pre>
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
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Daisy</td></tr>
<tr><th align='left'>Product</th><td>Daisy 2% Milkfat</td></tr>
<tr><th align='left'>Variant</th><td>2% Milkfat</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>tub</td></tr>
<tr><th align='left'>Package</th><td>13g Protein tub</td></tr>
<tr><th align='left'>Size</th><td>13g Protein</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>daisy cottag brand chees esactivecoa s withlive s s od milkfat lvi mo1 s s c s proiein</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>13g Protein</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Daisy</td></tr>
<tr><th align='left'>VLM Variant</th><td>2% Milkfat</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>tub</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Daisy</td></tr>
<tr><th align='left'>Resolver Variant</th><td>2% Milkfat</td></tr>
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
  &quot;product_variant&quot;: &quot;2% Milkfat&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;Small Curd&quot;,
  &quot;size_text&quot;: &quot;13g Protein&quot;,
  &quot;best_catalog_match&quot;: &quot;cottage cheese&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a tub of Daisy brand cottage cheese with a focus on its low-fat content and protein content.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Daisy&quot;,
  &quot;product_variant&quot;: &quot;2% Milkfat&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;Small Curd&quot;,
  &quot;size_text&quot;: &quot;13g Protein&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}
```

Explanation:

- The OCR text was cleaned up to remove unnecessary characters: `daisy cottag brand chees esactivecoa s withlive s s od milkfat lvi mo1 s s c s proiein` -&gt; `Daisy Brand Chees E Activate Co S With Live S S Od Milk Fat L Vi Mo 1 S S C S Proiein`
- The cleaned OCR text was combined with the raw vision model output.
- The brand name &quot;Daisy&quot; is normalized to a canonical consumer-facing name by adding the full brand name from the raw vision model output (&quot;Daisy Brand&quot;).
- The product variant, family, container type and spec are set to match the values in the raw vision model output.
- The size text is set to match the value in the raw vision model output.
- If no best catalog match was found in the raw vision model output, it defaults to &quot;cottage cheese&quot;.
- The confidence level from the raw vision model output is used directly. 
- Since there are multiple evidence types (&quot;logo&quot;, &quot;ocr&quot;), but only one best catalog match, both evidence types are added to the &#x27;reasons&#x27; list.
- As no generic category words were found in the OCR text or raw vision model output, and since no other details could be inferred, the &#x27;brand&#x27; field is not set empty.</pre>
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
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Avo Low Fat, dairy, 1L jug</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Avo</td></tr>
<tr><th align='left'>Product</th><td>Avo Low Fat</td></tr>
<tr><th align='left'>Variant</th><td>Low Fat</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>jug</td></tr>
<tr><th align='left'>Package</th><td>1L jug</td></tr>
<tr><th align='left'>Size</th><td>1L</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>ers d oun 9 sis</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>1L</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Avo</td></tr>
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
      <p><strong>Resolver reasons</strong></p><ul><li>{&#x27;value&#x27;: &#x27;best_catalog_match&#x27;, &#x27;reason&#x27;: &quot;The model&#x27;s best match for a yogurt product, but the actual label may be different.&quot;}</li>
<li>{&#x27;value&#x27;: &#x27;raw&#x27;, &#x27;reason&#x27;: &#x27;Raw output from the vision model&#x27;}</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Avo&quot;,
  &quot;product_variant&quot;: &quot;Low Fat&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;jug&quot;,
  &quot;container_spec&quot;: &quot;1L&quot;,
  &quot;size_text&quot;: &quot;1L&quot;,
  &quot;best_catalog_match&quot;: &quot;yogurt&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a jug with a label indicating it is a low-fat yogurt product.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;Low Fat&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;jug&quot;,
  &quot;container_spec&quot;: &quot;1L&quot;,
  &quot;size_text&quot;: &quot;1L&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: [
    {
      &quot;value&quot;: &quot;best_catalog_match&quot;, 
      &quot;reason&quot;: &quot;The model&#x27;s best match for a yogurt product, but the actual label may be different.&quot;
    },
    {
      &quot;value&quot;: &quot;raw&quot;, 
      &quot;reason&quot;: &quot;Raw output from the vision model&quot;
    }
  ]
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
<tr><th align='left'>Display Name</th><td>Coca-Cola Original Taste, soda, 200 bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Product</th><td>Coca-Cola Original Taste</td></tr>
<tr><th align='left'>Variant</th><td>Original Taste</td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>200 bottle</td></tr>
<tr><th align='left'>Size</th><td>200</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>s taste</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>200</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
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
      <p><strong>Resolver reasons</strong></p><ul><li>{&#x27;key&#x27;: &#x27;raw_vision_model_output.brand&#x27;, &#x27;value&#x27;: &#x27;Coca-Cola&#x27;}</li>
<li>{&#x27;key&#x27;: &#x27;ocr_text&#x27;, &#x27;value&#x27;: &#x27;taste&#x27;}</li></ul>
      
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
  &quot;best_catalog_match&quot;: &quot;Coca-Cola bottle&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a plastic bottle with a red label and the Coca-Cola logo, indicating it is a soda product.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```
{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;Original Taste&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;200&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: [
    {
      &quot;key&quot;: &quot;raw_vision_model_output.brand&quot;,
      &quot;value&quot;: &quot;Coca-Cola&quot;
    },
    {
      &quot;key&quot;: &quot;ocr_text&quot;,
      &quot;value&quot;: &quot;taste&quot;
    }
  ]
}
```</pre>
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
<tr><th align='left'>Display Name</th><td>Dals 2% Milk Fat, dairy, 13g Protein cup</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Dals</td></tr>
<tr><th align='left'>Product</th><td>Dals 2% Milk Fat</td></tr>
<tr><th align='left'>Variant</th><td>2% Milk Fat</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>cup</td></tr>
<tr><th align='left'>Package</th><td>13g Protein cup</td></tr>
<tr><th align='left'>Size</th><td>13g Protein</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>se dals brat 8 chees withlivegatia milktre only s lva mo1 s s 5 e protein e guthrieshess s s</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>13g Protein</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Dals</td></tr>
<tr><th align='left'>VLM Variant</th><td>2% Milk Fat</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>cup</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Dals</td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td>cup</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Dals&quot;,
  &quot;product_variant&quot;: &quot;2% Milk Fat&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;cup&quot;,
  &quot;container_spec&quot;: &quot;low fat&quot;,
  &quot;size_text&quot;: &quot;13g Protein&quot;,
  &quot;best_catalog_match&quot;: &quot;cottage cheese&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The container is a single-use cup designed for cottage cheese, with a focus on low-fat content and protein content.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;Dals&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;cup&quot;,
  &quot;container_spec&quot;: &quot;low fat&quot;,
  &quot;size_text&quot;: &quot;13g Protein&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}</pre>
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
<tr><th align='left'>Material (OpenFoodFacts)</th><td>hdpe 2 high density polyethylene, pet 1 polyethylene terephthalate, pp 5 polypropylene</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>s s taste shing resse sginal s s s rss</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>200</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
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
  &quot;notes&quot;: &quot;The image shows a plastic bottle with a red label and the Coca-Cola logo, indicating it is a 200ml bottle of Coca-Cola Original Taste.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{&quot;brand&quot;: &quot;Coca-Cola&quot;, &quot;product_variant&quot;: &quot;Original Taste&quot;, &quot;product_family&quot;: &quot;soda&quot;, &quot;container_type&quot;: &quot;bottle&quot;, &quot;container_spec&quot;: &quot;plastic&quot;, &quot;size_text&quot;: &quot;200&quot;, &quot;confidence&quot;: 0.9, &quot;reasons&quot;: []}</pre>
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
<tr><th align='left'>Display Name</th><td>Coca-Cola 20 fl oz, soda, 20 fl oz bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Product</th><td>Coca-Cola 20 fl oz</td></tr>
<tr><th align='left'>Variant</th><td>20 fl oz</td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>20 fl oz bottle</td></tr>
<tr><th align='left'>Size</th><td>20 fl oz</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>nutrition facts er aotlitze un 240 ud caloies al 20 lm a 1oox recte ea</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>20 fl oz</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>VLM Variant</th><td>20 fl oz</td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td>soda</td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>Raw Vision Model Output: Best Catalog Match Coca-Cola (90% Confidence)</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;20 fl oz&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;20 fl oz&quot;,
  &quot;size_text&quot;: &quot;20 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;Coca-Cola&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a Coca-Cola bottle with nutritional facts and recycling information.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;20 fl oz&quot;,
  &quot;size_text&quot;: &quot;20 fl oz&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: [
    &quot;Raw Vision Model Output: Best Catalog Match Coca-Cola (90% Confidence)&quot;
  ]
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
<tr><th align='left'>Display Name</th><td>Coca-Cola, lid</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Product</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>cup</td></tr>
<tr><th align='left'>Package</th><td>lid</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>ss</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td></td></tr>
<tr><th align='left'>VLM Container</th><td>cup</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td>cup</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      
      
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
  &quot;container_spec&quot;: &quot;lid&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a white lid, likely from a disposable cup, with a Coca-Cola can partially visible in the background. The OCR text &#x27;ss&#x27; and the lack of other identifiable branding or product information make it difficult to determine the exact product family or variant.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;cup&quot;,
  &quot;container_spec&quot;: &quot;lid&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: []
}</pre>
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
<tr><th align='left'>Display Name</th><td>Coca-Cola Recycle Me, soda, 500 ml bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Product</th><td>Coca-Cola Recycle Me</td></tr>
<tr><th align='left'>Variant</th><td>Recycle Me</td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>500 ml bottle</td></tr>
<tr><th align='left'>Size</th><td>500 ml</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>s d laia lisde recycle mie seerouagainsoo s s s 5 d</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>500 ml</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>VLM Variant</th><td>Recycle Me</td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td>Recycle Me</td></tr>
<tr><th align='left'>Resolver Family</th><td>soda</td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;Recycle Me&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;500 ml&quot;,
  &quot;best_catalog_match&quot;: &quot;Coca-Cola bottle&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;text&quot;],
  &quot;notes&quot;: &quot;The bottle has a &#x27;Recycle Me&#x27; label, indicating it is designed for recycling.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>Here&#x27;s the normalized JSON output:

```
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;Recycle Me&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;500 ml&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: []
}
```

I chose to set `brand` to empty because the OCR text was only partially readable and didn&#x27;t contain a recognizable brand name. The raw vision model output had a brand name, but it included a generic category word (&quot;soda&quot;) that isn&#x27;t useful in this context. I also removed the `confidence` value from 0.8 because it&#x27;s not supported by the rules and might be considered hallucinated detail.</pre>
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
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>recycle mie eseerouagan sont s s s s d</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>500ml</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>VLM Variant</th><td>500ml</td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Resolver Variant</th><td>500ml</td></tr>
<tr><th align='left'>Resolver Family</th><td>soda</td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>OCR and vision model agreement</li></ul>
      
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
  &quot;best_catalog_match&quot;: &quot;Coca-Cola&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a Coca-Cola bottle with a &#x27;Recycle Me&#x27; label, indicating it is a recyclable container.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;500ml&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;500ml&quot;,
  &quot;size_text&quot;: &quot;500ml&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: [&quot;OCR and vision model agreement&quot;]
}
```

In this output, the `brand` field is set to the raw vision model&#x27;s brand value (`&quot;Coca-Cola&quot;`), which is then normalized using a custom mapping for consumer-facing names.

The OCR text does not provide a clear brand name, so we rely solely on the raw vision model&#x27;s output. However, since the OCR text includes generic words (&quot;recycle&quot;, &quot;mie&quot;), it suggests that the brand may be more ambiguous. The final output still uses the raw vision model&#x27;s brand value, as the OCR text does not provide sufficient evidence to contradict or clarify the brand.

The `confidence` field is set to 0.9 based on the raw vision model&#x27;s confidence in its output. This value indicates that the model is fairly confident in its identification of the product and its attributes.

Finally, the `reasons` field contains a single reason for the output: &quot;OCR and vision model agreement&quot;.</pre>
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
<tr><th align='left'>Display Name</th><td>Coca-Cola, soda, 200 bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Product</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>200 bottle</td></tr>
<tr><th align='left'>Size</th><td>200</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>e s s ls oozsatoie e s soou ntage auhedtcally sa ispineg o l be</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>200</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>VLM Variant</th><td>200</td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Resolver Variant</th><td>200</td></tr>
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
  &quot;product_variant&quot;: &quot;200&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;clear plastic&quot;,
  &quot;size_text&quot;: &quot;200&quot;,
  &quot;best_catalog_match&quot;: &quot;Coca-Cola 200ml bottle&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;product variant&quot;, &quot;container type&quot;],
  &quot;notes&quot;: &quot;The image shows a clear plastic bottle with a red label featuring the Coca-Cola logo and the text &#x27;200&#x27; indicating the volume of the drink.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;200&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;clear plastic&quot;,
  &quot;size_text&quot;: &quot;200&quot;,
  &quot;confidence&quot;: 0.8,
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
<tr><th align='left'>Display Name</th><td>Coca-Cola 0 calories, soda, 12 FL OZ (355 mL) can</td></tr>
<tr><th align='left'>Confidence</th><td>0.95</td></tr>
<tr><th align='left'>Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Product</th><td>Coca-Cola 0 calories</td></tr>
<tr><th align='left'>Variant</th><td>0 calories</td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>12 FL OZ (355 mL) can</td></tr>
<tr><th align='left'>Size</th><td>12 FL OZ (355 mL)</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>plastic</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>e s g e s j p s s s s e</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>12 FL OZ (355 mL)</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Diet Coke</td></tr>
<tr><th align='left'>VLM Variant</th><td>0 calories</td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.95</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td></td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.95</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Diet Coke&quot;,
  &quot;product_variant&quot;: &quot;0 calories&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;12 fl oz&quot;,
  &quot;size_text&quot;: &quot;12 FL OZ (355 mL)&quot;,
  &quot;best_catalog_match&quot;: &quot;Diet Coke&quot;,
  &quot;confidence&quot;: 0.95,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a can of Diet Coke with the text &#x27;0 calories&#x27; and &#x27;12 FL OZ (355 mL)&#x27; clearly visible.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```
{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.95,
  &quot;reasons&quot;: []
}
```</pre>
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
<tr><th align='left'>Display Name</th><td>Coca-Cola, soda, 200 bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Product</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>200 bottle</td></tr>
<tr><th align='left'>Size</th><td>200</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>oogsaluoe et g s</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>200</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
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
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;size_text&quot;],
  &quot;notes&quot;: &quot;The image shows a plastic bottle with a red label and the Coca-Cola logo, indicating it is a soda bottle.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```
{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;200&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;200&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}
```</pre>
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
<tr><th align='left'>Display Name</th><td>merve original, yogurt, 16 fl oz (1 pint) bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>merve</td></tr>
<tr><th align='left'>Product</th><td>merve original</td></tr>
<tr><th align='left'>Variant</th><td>original</td></tr>
<tr><th align='left'>Category</th><td>yogurt</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>16 fl oz (1 pint) bottle</td></tr>
<tr><th align='left'>Size</th><td>16 fl oz (1 pint)</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>merve yogurtdrink ayran original 1610z slas e pint s</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>16 fl oz (1 pint)</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>merve</td></tr>
<tr><th align='left'>VLM Variant</th><td>original</td></tr>
<tr><th align='left'>VLM Family</th><td>yogurt</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Yogurt Drink</td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td>yogurt</td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;merve&quot;,
  &quot;product_variant&quot;: &quot;original&quot;,
  &quot;product_family&quot;: &quot;yogurt&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;473ml&quot;,
  &quot;size_text&quot;: &quot;16 fl oz (1 pint)&quot;,
  &quot;best_catalog_match&quot;: &quot;yogurt drink&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a bottle with a label indicating it is a yogurt drink.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>Here&#x27;s the normalized JSON output:

```
{
  &quot;brand&quot;: &quot;Yogurt Drink&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;Yogurt&quot;,
  &quot;container_type&quot;: &quot;Bottle&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;16 fl oz (1 pint)&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: []
}
```

Here&#x27;s the explanation for the above output:

- Normalized brand: The OCR text contains a generic term &quot;yogurtdrink&quot; and &quot;ayran original&quot;. However, we need to find a more specific brand name. Luckily, there is a match in the raw vision model output with &quot;merve yogurtdrink&quot;. We can use this as our brand name.
- product_variant: Since the OCR text doesn&#x27;t contain any specific variant (e.g., &quot;original&quot;), we will leave it empty for now.
- product_family: The raw vision model output contains a match for &quot;yogurt&quot;, which is a good indication of the product family.
- container_type and size_text: These are also available in the raw vision model output, so we can use them as well.
- confidence: Since both OCR and vision models have low confidence scores (0.0), we will set our final confidence score to 0.0.
- reasons: We don&#x27;t have any specific details that would lead us to a different brand name or product information, so we will leave this list empty.

The reason we choose &quot;Yogurt Drink&quot; as the brand is because it seems more specific and accurate compared to other options like just &quot;merve&quot;, which might be too generic. Also, we use this choice over a possible match in the OCR text because there&#x27;s no better information available for certain product details such as size_text or container_spec from the raw vision model output.</pre>
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
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Chobani Whole Milk Greek Yogurt, dairy, 16 oz tub</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Chobani</td></tr>
<tr><th align='left'>Product</th><td>Chobani Whole Milk Greek Yogurt</td></tr>
<tr><th align='left'>Variant</th><td>Whole Milk Greek Yogurt</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>tub</td></tr>
<tr><th align='left'>Package</th><td>16 oz tub</td></tr>
<tr><th align='left'>Size</th><td>16 oz</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>rutens socae s e se s h whole t s s s ligrinotan</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>16 oz</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Chobani</td></tr>
<tr><th align='left'>VLM Variant</th><td>Whole Milk Greek Yogurt</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>tub</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Chobani</td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
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
  &quot;product_variant&quot;: &quot;Whole Milk Greek Yogurt&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;recyclable&quot;,
  &quot;size_text&quot;: &quot;16 oz&quot;,
  &quot;best_catalog_match&quot;: &quot;Greek Yogurt&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a close-up of a Chobani Greek Yogurt tub with text indicating it is whole milk and Greek yogurt.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;Chobani&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;recyclable&quot;,
  &quot;size_text&quot;: &quot;16 oz&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}</pre>
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
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>ct wn ndnt dal iis d gwons e salced tuonan uons</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>20 fl oz</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
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
  &quot;notes&quot;: &quot;The image shows a plastic bottle with a label indicating it is a zero-calorie sports drink.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```
{
  &quot;brand&quot;: &quot;Gatorade&quot;,
  &quot;product_variant&quot;: &quot;Zero&quot;,
  &quot;product_family&quot;: &quot;sports drink&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;20 fl oz&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}
```

Explanation:

- Normalized `brand` string to match the provided vision model output.
- Set other fields based on the vision model output.
- Confidence was set to match the provided confidence value from the raw vision model output.
- Since both OCR text and vision model output were available, we relied on the vision model output for most of the fields.</pre>
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
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Bio-K Bio-K Plus Extra, dairy, 5g jar</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Bio-K</td></tr>
<tr><th align='left'>Product</th><td>Bio-K Bio-K Plus Extra</td></tr>
<tr><th align='left'>Variant</th><td>Bio-K Plus Extra</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>jar</td></tr>
<tr><th align='left'>Package</th><td>5g jar</td></tr>
<tr><th align='left'>Size</th><td>5g</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>se srsas htte st o w curcn s let cry d ca</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>5g</td></tr>
<tr><th align='left'>Barcodes</th><td>626608008011 &lt;br/&gt;&lt;small&gt;&lt;i&gt;(via OpenCV BarcodeDetector)&lt;/i&gt; -&gt; &lt;b&gt;OpenFoodFacts Hit&lt;/b&gt;: Bio-K Bio-K Plus Extra&lt;/small&gt;&lt;br&gt;0626608008011 &lt;br/&gt;&lt;small&gt;&lt;i&gt;(via PyZbar)&lt;/i&gt; -&gt; &lt;b&gt;OpenFoodFacts Hit&lt;/b&gt;: Bio-K Bio-K Plus Extra&lt;/small&gt;</td></tr>
<tr><th align='left'>VLM Brand</th><td>Bio-K</td></tr>
<tr><th align='left'>VLM Variant</th><td>Bio-K Plus Extra</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>jar</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Bio-K</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Bio-K Plus Extra</td></tr>
<tr><th align='left'>Resolver Family</th><td>dairy</td></tr>
<tr><th align='left'>Resolver Container</th><td>jar</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>{&#x27;reason&#x27;: &#x27;hallucinated brand name&#x27;}</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Bio-K&quot;,
  &quot;product_variant&quot;: &quot;Bio-K Plus Extra&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;jar&quot;,
  &quot;container_spec&quot;: &quot;white&quot;,
  &quot;size_text&quot;: &quot;5g&quot;,
  &quot;best_catalog_match&quot;: &quot;yogurt&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;barcode&quot;, &quot;text&quot;],
  &quot;notes&quot;: &quot;The image shows a white jar with a label indicating it is a dairy product, likely yogurt, based on the size and the brand Bio-K, which is known for probiotic products.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;Bio-K&quot;,
  &quot;product_variant&quot;: &quot;Bio-K Plus Extra&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;jar&quot;,
  &quot;container_spec&quot;: &quot;white&quot;,
  &quot;size_text&quot;: &quot;5g&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: [
    {
      &quot;reason&quot;: &quot;hallucinated brand name&quot;
    }
  ]
}</pre>
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
<tr><th align='left'>Display Name</th><td>Low Fat, dairy, 12 fl oz (355 ml) jug</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td>Low Fat</td></tr>
<tr><th align='left'>Variant</th><td>Low Fat</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>jug</td></tr>
<tr><th align='left'>Package</th><td>12 fl oz (355 ml) jug</td></tr>
<tr><th align='left'>Size</th><td>12 fl oz (355 ml)</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>e s estrog ee cous srel oo0 amu mo7 te snintla oa lv ol tun tiis</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>12 fl oz (355 ml)</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Dairy</td></tr>
<tr><th align='left'>VLM Variant</th><td>Low Fat</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>jug</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td></td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      
      
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
  &quot;container_spec&quot;: &quot;1% milk&quot;,
  &quot;size_text&quot;: &quot;12 fl oz (355 ml)&quot;,
  &quot;best_catalog_match&quot;: &quot;milk&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;shape&quot;],
  &quot;notes&quot;: &quot;The container is labeled as &#x27;Low Fat&#x27; and &#x27;1% milk&#x27;, indicating it is a dairy product.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: []
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
<tr><th align='left'>Material (OpenFoodFacts)</th><td>hdpe 2 high density polyethylene, pet 1 polyethylene terephthalate, pp 5 polypropylene</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>oo</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
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
<p><strong>Resolver Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}
```

This response includes the normalized brand string, along with empty fields for product variant and size text since they were not present in the provided OCR output. The `confidence` field is set to 0.9 based on the confidence value from the raw vision model output.</pre>
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
<tr><th align='left'>Display Name</th><td>Coca-Cola Original, soda, 500ml bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Product</th><td>Coca-Cola Original</td></tr>
<tr><th align='left'>Variant</th><td>Original</td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>500ml bottle</td></tr>
<tr><th align='left'>Size</th><td>500ml</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>hdpe 2 high density polyethylene, pet 1 polyethylene terephthalate, pp 5 polypropylene</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>ocag original deliciaus s taste retresn</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>500ml</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
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
  &quot;size_text&quot;: &quot;500ml&quot;,
  &quot;best_catalog_match&quot;: &quot;500ml plastic bottle&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a plastic bottle with a red label and the Coca-Cola logo, indicating it is a soda product.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;Original&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;500ml&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}
```

Explanation:

- The OCR text was normalized to &quot;Coca-Cola&quot; and combined with the raw vision model output.
- Since there were no generic category words like yogurt, soda, juice, bottle, can, cup, tub, or container in the normalized brand string, it was not set to empty.</pre>
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
<tr><th align='left'>Display Name</th><td>Coca-Cola Zero, soda, 12 fl oz (355 ml) can</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Product</th><td>Coca-Cola Zero</td></tr>
<tr><th align='left'>Variant</th><td>Zero</td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>12 fl oz (355 ml) can</td></tr>
<tr><th align='left'>Size</th><td>12 fl oz (355 ml)</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>aluminium</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>ougen z012 obl w cai</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>12 fl oz (355 ml)</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>VLM Variant</th><td>Zero</td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Zero</td></tr>
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
  &quot;product_variant&quot;: &quot;Zero&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;12 fl oz (355 ml)&quot;,
  &quot;size_text&quot;: &quot;12 fl oz (355 ml)&quot;,
  &quot;best_catalog_match&quot;: &quot;Coca-Cola Zero&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The can is red with the iconic Coca-Cola logo and the text &#x27;RECYCLE ME&#x27; on the side, indicating it is a recyclable container.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;Zero&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;12 fl oz (355 ml)&quot;,
  &quot;size_text&quot;: &quot;12 fl oz (355 ml)&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
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
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td></td></tr>
<tr><th align='left'>OCR Engine</th><td>none</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
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
      <p><strong>Resolver reasons</strong></p><ul><li>Raw vision model output had a high confidence in the brand and product family.</li></ul>
      
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
  &quot;notes&quot;: &quot;The image shows a red and white can with a pull-tab, which is characteristic of Coca-Cola cans.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: [
    &quot;Raw vision model output had a high confidence in the brand and product family.&quot;
  ]
}
```

Note that I&#x27;ve set `product_variant` to an empty string as it was not identifiable from the raw vision model output. If more information becomes available, this field can be updated.

Also, `size_text` and `container_spec` were not provided in the raw vision model output, so they remain empty. 

The brand is normalized based on the &quot;best_catalog_match&quot; which is &quot;Coca-Cola can&quot;. The confidence is 0.9 as per the raw vision model output.</pre>
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
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>daod</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
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
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a red can with the &#x27;Coke&#x27; logo, indicating it is a Coca-Cola product.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```
{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}
```</pre>
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
<tr><th align='left'>Material (OpenFoodFacts)</th><td>aluminium</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>otl sloes sira toln pmomy</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>1 Can</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>VLM Variant</th><td>1 Can</td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td></td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
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
  &quot;container_spec&quot;: &quot;1 Can&quot;,
  &quot;size_text&quot;: &quot;1 Can&quot;,
  &quot;best_catalog_match&quot;: &quot;soda&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a can with a Coca-Cola logo and nutritional facts, indicating it is a soda product.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>Here&#x27;s the JSON object for the consumer package:

```
{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;1 Can&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;1 Can&quot;,
  &quot;size_text&quot;: &quot;1 Can&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}
```

Explanation of decisions:

*   The `brand` is set to &quot;Coca-Cola&quot; as it&#x27;s the most likely correct value based on both OCR text and raw vision model output.
*   Since the product variant, family, container type, and spec are all well-defined in the raw vision model output, there&#x27;s no need to make any changes here.
*   The `size_text` is also set to &quot;1 Can&quot; as it&#x27;s a clear value from both sources.
*   Confidence level of 0.9 suggests that the OCR text and raw vision model output are relatively accurate, so we stick with this confidence level.

However, there is an issue with the OCR output - &quot;otl sloes sira toln pmomy&quot;. If we were to just take this as our brand, the consumer might end up receiving a different product than what they expect. To avoid this, we will look up if the provided string matches any of the known brand names and make the most likely match.

Let&#x27;s add that logic:

```json
{
  &quot;brand&quot;: getBestBrandMatch(&quot;otl sloes sira toln pmomy&quot;),
  &quot;product_variant&quot;: &quot;1 Can&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;1 Can&quot;,
  &quot;size_text&quot;: &quot;1 Can&quot;,
  &quot;confidence&quot;: getConfidence(&quot;otl sloes sira toln pmomy&quot;, {
    &quot;Coca-Cola&quot;: 0.9,
    &quot;Mountain Dew&quot;: 0.7,
    &quot;A&amp;W&quot;: 0.5
  }),
  &quot;reasons&quot;: []
}

function getBestBrandMatch(text) {
  let matches = [
    &quot;Coca-Cola&quot;,
    &quot;Mountain Dew&quot;,
    &quot;A&amp;W&quot;
  ];
  
  // Add more brand names as needed

  let maxConfidence = -1;
  let bestMatch = &quot;&quot;;

  for (let match of matches) {
    let confidence = getBrandConfidence(text, match);
    
    if (confidence &gt; maxConfidence) {
      maxConfidence = confidence;
      bestMatch = match;
    }
  }

  return bestMatch;

}

function getConfidence(text, brands) {
  let totalConfidence = 0;
  
  for (let brand in brands) {
    totalConfidence += brands[brand];
  }
  
  if (totalConfidence == 0) {
    return 0.3; // Generic category words
  } else {
    return text.split(&quot; &quot;).reduce((acc, word) =&gt; acc + brands[word], 0) / totalConfidence;
  }
}
```

This updated version of the JSON object uses a function `getBestBrandMatch` to look up if any of the provided brand names are matches for the OCR output. If no match is found, it sets the `brand` field to an empty string.

The `getConfidence` function takes the text and brands dictionary as input, calculates a confidence score for each word in the text against all possible brands, and returns this total score divided by the number of matches.</pre>
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
<tr><th align='left'>Display Name</th><td>Siggi&#x27;s Whole Milk Plain, dairy, 32 oz (907g) tub</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Siggi&#x27;s</td></tr>
<tr><th align='left'>Product</th><td>Siggi&#x27;s Whole Milk Plain</td></tr>
<tr><th align='left'>Variant</th><td>Whole Milk Plain</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>tub</td></tr>
<tr><th align='left'>Package</th><td>32 oz (907g) tub</td></tr>
<tr><th align='left'>Size</th><td>32 oz (907g)</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>su mpaneis asnyzly suaniishd sumple ingren s s w s i s s s s e s s e g s s e x s pueereatie e peseiich saerice nestorian s i whollas f s ainatural s s i 3 iogurs s s y tlan g g g 8 de be</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>32 oz (907g)</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Siggi&#x27;s</td></tr>
<tr><th align='left'>VLM Variant</th><td>Whole Milk Plain</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>tub</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td></td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.5</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>Noisy OCR output</li>
<li>Insufficient evidence from vision model</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Siggi&#x27;s&quot;,
  &quot;product_variant&quot;: &quot;Whole Milk Plain&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;32 oz (907g)&quot;,
  &quot;size_text&quot;: &quot;32 oz (907g)&quot;,
  &quot;best_catalog_match&quot;: &quot;yogurt&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The container is labeled as Greek strained yogurt, which is a type of yogurt.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.5,
  &quot;reasons&quot;: [
    &quot;Noisy OCR output&quot;,
    &quot;Insufficient evidence from vision model&quot;
  ]
}
```</pre>
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
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>s</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
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
      <p><strong>Resolver reasons</strong></p><ul><li>{&#x27;value&#x27;: &#x27;Logo match&#x27;}</li>
<li>{&#x27;value&#x27;: &#x27;Shape recognition&#x27;}</li></ul>
      
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
  &quot;notes&quot;: &quot;The image shows a close-up of a Coca-Cola can with the iconic red and white color scheme and the pull-tab.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```
{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: [
    {
      &quot;value&quot;: &quot;Logo match&quot;
    },
    {
      &quot;value&quot;: &quot;Shape recognition&quot;
    }
  ]
}
```</pre>
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
<tr><th align='left'>Display Name</th><td>Siggi&#x27;s Total 5% Greek Strained, dairy, 32 oz (907g) tub</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Siggi&#x27;s</td></tr>
<tr><th align='left'>Product</th><td>Siggi&#x27;s Total 5% Greek Strained</td></tr>
<tr><th align='left'>Variant</th><td>Total 5% Greek Strained</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>tub</td></tr>
<tr><th align='left'>Package</th><td>32 oz (907g) tub</td></tr>
<tr><th align='left'>Size</th><td>32 oz (907g)</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>1e i s uple inrees s s s s 15 s e s s s s s s s preseniis protenerich s glutenaliee s e s vogcarad s s s daltine togune s s s s s 8 a 0 3 wolrit ilat cued</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>32 oz (907g)</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Siggi&#x27;s</td></tr>
<tr><th align='left'>VLM Variant</th><td>Total 5% Greek Strained</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>tub</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td>Total 5% Greek Strained</td></tr>
<tr><th align='left'>Resolver Family</th><td>dairy</td></tr>
<tr><th align='left'>Resolver Container</th><td>tub</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>{&#x27;type&#x27;: &#x27;noisy OCR text&#x27;, &#x27;value&#x27;: &#x27;i s uple inrees&#x27;}</li>
<li>{&#x27;type&#x27;: &#x27;vision model output&#x27;, &#x27;value&#x27;: &#x27;yogurt&#x27;}</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Siggi&#x27;s&quot;,
  &quot;product_variant&quot;: &quot;Total 5% Greek Strained&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;32 oz (907g)&quot;,
  &quot;size_text&quot;: &quot;32 oz (907g)&quot;,
  &quot;best_catalog_match&quot;: &quot;yogurt&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The container is a tub of Greek yogurt, as indicated by the text on the label.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;Total 5% Greek Strained&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;32 oz (907g)&quot;,
  &quot;size_text&quot;: &quot;32 oz (907g)&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: [
    {
      &quot;type&quot;: &quot;noisy OCR text&quot;,
      &quot;value&quot;: &quot;i s uple inrees&quot;
    },
    {
      &quot;type&quot;: &quot;vision model output&quot;,
      &quot;value&quot;: &quot;yogurt&quot;
    }
  ]
}
```
Note that the `brand` field is empty because the vision model output indicates that the brand is not well-known (in this case, &quot;Siggi&#x27;s&quot; was detected but it&#x27;s likely a private label or a store brand). The OCR text has been normalized to some extent by using it as evidence for the brand, but ultimately, the vision model&#x27;s output takes precedence.

The `confidence` field reflects the uncertainty in the input data, with 0.8 indicating that the vision model&#x27;s output is relatively confident and the noisy OCR text was used as a secondary check.</pre>
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
<tr><th align='left'>Display Name</th><td>Sanpellegrino Ciao! Blood Orange, juice, 11.15 fl oz can</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Sanpellegrino</td></tr>
<tr><th align='left'>Product</th><td>Sanpellegrino Ciao! Blood Orange</td></tr>
<tr><th align='left'>Variant</th><td>Ciao! Blood Orange</td></tr>
<tr><th align='left'>Category</th><td>juice</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>11.15 fl oz can</td></tr>
<tr><th align='left'>Size</th><td>11.15 fl oz</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>sani l oid car s aces d slt sino s te</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>11.15 fl oz</td></tr>
<tr><th align='left'>Barcodes</th><td>041508152525 &lt;br/&gt;&lt;small&gt;&lt;i&gt;(via OpenCV BarcodeDetector)&lt;/i&gt; -&gt; &lt;b&gt;OpenFoodFacts Hit&lt;/b&gt;: Sanpellegrino Ciao! Blood Orange 11.15 fl oz&lt;/small&gt;</td></tr>
<tr><th align='left'>VLM Brand</th><td>Sanpellegrino</td></tr>
<tr><th align='left'>VLM Variant</th><td>Ciao! Blood Orange</td></tr>
<tr><th align='left'>VLM Family</th><td>juice</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Sanpellegrino</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Ciao! Blood Orange</td></tr>
<tr><th align='left'>Resolver Family</th><td>juice</td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>{&#x27;@type&#x27;: &#x27;PropertyValue&#x27;, &#x27;value&#x27;: &#x27;barcode&#x27;}</li>
<li>{&#x27;@type&#x27;: &#x27;PropertyValue&#x27;, &#x27;value&#x27;: &#x27;ocr&#x27;}</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Sanpellegrino&quot;,
  &quot;product_variant&quot;: &quot;Ciao! Blood Orange&quot;,
  &quot;product_family&quot;: &quot;juice&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;11.15 fl oz&quot;,
  &quot;size_text&quot;: &quot;11.15 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;Sanpellegrino Ciao! Blood Orange&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;, &quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a can with the Sanpellegrino logo and the product name &#x27;Ciao! Blood Orange&#x27;. The OCR text and barcode confirm the product details.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;Sanpellegrino&quot;,
  &quot;product_variant&quot;: &quot;Ciao! Blood Orange&quot;,
  &quot;product_family&quot;: &quot;juice&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;11.15 fl oz&quot;,
  &quot;size_text&quot;: &quot;11.15 fl oz&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: [
    {
      &quot;@type&quot;: &quot;PropertyValue&quot;,
      &quot;value&quot;: &quot;barcode&quot;
    },
    {
      &quot;@type&quot;: &quot;PropertyValue&quot;,
      &quot;value&quot;: &quot;ocr&quot;
    }
  ]
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
<tr><th align='left'>Display Name</th><td>San Pellegrino Blonde, juice, 500 ml can</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>San Pellegrino</td></tr>
<tr><th align='left'>Product</th><td>San Pellegrino Blonde</td></tr>
<tr><th align='left'>Variant</th><td>Blonde</td></tr>
<tr><th align='left'>Category</th><td>juice</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>500 ml can</td></tr>
<tr><th align='left'>Size</th><td>500 ml</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>sans s dded pasc spa apilecr uices eene t oleuspr ily atae rino e blu oriss c serce aucn t f maira d baie uib ow s t cy ea bies aee</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>500 ml</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>San Pellegrino</td></tr>
<tr><th align='left'>VLM Variant</th><td>Blonde</td></tr>
<tr><th align='left'>VLM Family</th><td>juice</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>San Pellegrino</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Blonde</td></tr>
<tr><th align='left'>Resolver Family</th><td>juice</td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>{&#x27;name&#x27;: &#x27;match_in_raw_output&#x27;, &#x27;description&#x27;: &#x27;Raw vision model output matches known product information&#x27;}</li>
<li>{&#x27;name&#x27;: &#x27;good_ocr_match&#x27;, &#x27;description&#x27;: &#x27;OCR text appears to match brand name, although with some noise&#x27;}</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;San Pellegrino&quot;,
  &quot;product_variant&quot;: &quot;Blonde&quot;,
  &quot;product_family&quot;: &quot;juice&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;recyclable&quot;,
  &quot;size_text&quot;: &quot;500 ml&quot;,
  &quot;best_catalog_match&quot;: &quot;San Pellegrino Blonde&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a can with branding and text that matches San Pellegrino&#x27;s product line, specifically the Blonde variant. The text &#x27;Blonde&#x27; is clearly visible on the can.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```
{
  &quot;brand&quot;: &quot;San Pellegrino&quot;,
  &quot;product_variant&quot;: &quot;Blonde&quot;,
  &quot;product_family&quot;: &quot;juice&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;recyclable&quot;,
  &quot;size_text&quot;: &quot;500 ml&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: [
    {
      &quot;name&quot;: &quot;match_in_raw_output&quot;,
      &quot;description&quot;: &quot;Raw vision model output matches known product information&quot;
    },
    {
      &quot;name&quot;: &quot;good_ocr_match&quot;,
      &quot;description&quot;: &quot;OCR text appears to match brand name, although with some noise&quot;
    }
  ]
}
```</pre>
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
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>memes n</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td></td></tr>
<tr><th align='left'>VLM Container</th><td>tub</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td></td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      
      
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
  &quot;notes&quot;: &quot;The image shows a close-up of a white container with a green label, suggesting it could be a tub or jar. The OCR text &#x27;memes n&#x27; and the lack of clear branding or product information make it difficult to identify the product family or variant. The container shape is consistent with a tub or jar.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: []
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
<tr><th align='left'>Display Name</th><td>Apple &amp; Eve 100% Juice, juice, 181 l bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Apple &amp; Eve</td></tr>
<tr><th align='left'>Product</th><td>Apple &amp; Eve 100% Juice</td></tr>
<tr><th align='left'>Variant</th><td>100% Juice</td></tr>
<tr><th align='left'>Category</th><td>juice</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>181 l bottle</td></tr>
<tr><th align='left'>Size</th><td>181 l</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>vinaning g suga adolo eve juice s frunn uottoonn s a ncaate 1oog servings apple uilozizqt181l</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>181 l</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Apple &amp; Eve</td></tr>
<tr><th align='left'>VLM Variant</th><td>100% Juice</td></tr>
<tr><th align='left'>VLM Family</th><td>juice</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td></td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Apple &amp; Eve&quot;,
  &quot;product_variant&quot;: &quot;100% Juice&quot;,
  &quot;product_family&quot;: &quot;juice&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;181 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;apple juice&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a bottle of Apple &amp; Eve 100% apple juice with a label indicating it contains 181 fluid ounces of juice.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}
```

Reasoning:

- OCR text `vinaning g suga adolo eve juice s frunn uottoonn s a ncaate 1oog servings apple uilozizqt181l` and raw vision model output both suggest the product is an apple juice.

- The brand &quot;Apple &amp; Eve&quot; in the raw model output matches the product name, while &quot;apple juice&quot; is mentioned as the best catalog match. 

- No generic category words like yogurt, soda, juice, bottle, can, cup, tub, or container are present in the OCR text or raw vision model output.

- The product variant is not specified and should be left empty.

- The container type is a bottle with a plastic specification, which matches both outputs. 

- There&#x27;s no size text provided by either the OCR or the vision model, but since we have an accurate length (181 fl oz) from the raw vision output, it should be used.

- Confidence in the vision model output is 0.9, and there&#x27;s evidence of both logos and OCR, which supports its accuracy.

- There are no notes suggesting any errors or inaccuracies in the brand identification.</pre>
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
<tr><th align='left'>Display Name</th><td>Cro Lemon sparkling water Lemon, sparkling water, 12 fl oz can</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Cro Lemon</td></tr>
<tr><th align='left'>Product</th><td>Cro Lemon sparkling water Lemon</td></tr>
<tr><th align='left'>Variant</th><td>sparkling water Lemon</td></tr>
<tr><th align='left'>Category</th><td>sparkling water</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>12 fl oz can</td></tr>
<tr><th align='left'>Size</th><td>12 fl oz</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>co z e e ouu s</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>12 fl oz</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Cro</td></tr>
<tr><th align='left'>VLM Variant</th><td>Lemon</td></tr>
<tr><th align='left'>VLM Family</th><td>sparkling water</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Cro Lemon Sparkling Water</td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td>sparkling water</td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>{&#x27;type&#x27;: &#x27;noisy Brand Input&#x27;}</li>
<li>{&#x27;type&#x27;: &#x27;Vision Model Output&#x27;}</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Cro&quot;,
  &quot;product_variant&quot;: &quot;Lemon&quot;,
  &quot;product_family&quot;: &quot;sparkling water&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;12 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;Cro Lemon Sparkling Water&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a can with a lemon-themed design and the word &#x27;Lemon&#x27; prominently displayed, indicating it is a lemon-flavored sparkling water.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;Cro Lemon Sparkling Water&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;sparkling water&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;12 fl oz&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: [
    {
      &quot;type&quot;: &quot;noisy Brand Input&quot;
    },
    {
      &quot;type&quot;: &quot;Vision Model Output&quot;
    }
  ]
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
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Apple &amp; Natural, juice, 12 fl oz can</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Apple &amp;</td></tr>
<tr><th align='left'>Product</th><td>Apple &amp; Natural</td></tr>
<tr><th align='left'>Variant</th><td>Natural</td></tr>
<tr><th align='left'>Category</th><td>juice</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>12 fl oz can</td></tr>
<tr><th align='left'>Size</th><td>12 fl oz</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>s otood e s e</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>12 fl oz</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Apple &amp;</td></tr>
<tr><th align='left'>VLM Variant</th><td>Natural</td></tr>
<tr><th align='left'>VLM Family</th><td>juice</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td></td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Apple &amp;&quot;,
  &quot;product_variant&quot;: &quot;Natural&quot;,
  &quot;product_family&quot;: &quot;juice&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;12 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;Apple &amp; Eve Natural Juice&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;shape&quot;],
  &quot;notes&quot;: &quot;The can is partially visible with a logo and shape consistent with a juice can.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: []
}
```

Explanation:

1. Normalized brand: The raw vision model output contains a partial match for the brand &quot;Apple &amp;&quot;. Since it&#x27;s not a full match, we cannot make an educated guess on the complete brand name. Therefore, we leave the brand field empty.

2. Product variant and family: We can extract some information from the OCR text that mentions &#x27;sotood e s e&#x27;, which seems to be related to a product type or size (12 fl oz). However, without additional context or more precise OCR output, it&#x27;s hard to accurately determine the exact product variant and family.

3. Container type and spec: The raw vision model output provides some information about the container, including its material being aluminum. Still, with only &#x27;sotood e s e&#x27; from the OCR text, we cannot be certain about the size of the container or whether it is a bottle, can, cup, tub, etc.

4. Size text: We do have the size of the product mentioned as 12 fl oz in the raw vision model output. However, this value may not be represented in the same way as &#x27;sotood e s e&#x27;. For now, we leave it empty to avoid any confusion.

5. Confidence and reasons: Since there is only one OCR text entry with a value of &#x27;e s e&#x27; (which likely stands for something like 12 fl oz), confidence is currently set to 0. We also have no information about the reasons for the current output, so we leave this field empty as well.

```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: []
}
```

This output is the most conservative given the limited OCR text and raw vision model output information provided, with all fields set to empty or unknown values.</pre>
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
<tr><th align='left'>Display Name</th><td>Cro Lemon, sparkling water, 0 calorie</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Cro</td></tr>
<tr><th align='left'>Product</th><td>Cro Lemon</td></tr>
<tr><th align='left'>Variant</th><td>Lemon</td></tr>
<tr><th align='left'>Category</th><td>sparkling water</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>0 calorie</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>e s re s e e essenced water 0 calore</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Cro</td></tr>
<tr><th align='left'>VLM Variant</th><td>Lemon</td></tr>
<tr><th align='left'>VLM Family</th><td>sparkling water</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td></td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Cro&quot;,
  &quot;product_variant&quot;: &quot;Lemon&quot;,
  &quot;product_family&quot;: &quot;sparkling water&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;0 calorie&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;sparkling water&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a can of sparkling water with a lemon flavor and a 0 calorie claim.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: []
}</pre>
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
        <tr><th align='left'>Detection</th><td>weak</td></tr>
<tr><th align='left'>Display Name</th><td>water can</td></tr>
<tr><th align='left'>Confidence</th><td>0.5</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td>water</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>1 Can can</td></tr>
<tr><th align='left'>Size</th><td>1 Can</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>nutrition facts serving l cain spesn calorie o taaes tolal fal suduny up lolal ca poten ngrolens aier bonaed lod ncid ms bs aen cly eo</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>1 Can</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td>water</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td>water</td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.5</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>{&#x27;name&#x27;: &#x27; OCR Text&#x27;, &#x27;text&#x27;: &#x27;nutrition facts serving l cain spesn calorie o taaes tolal fal suduny up lolal ca poten ngrolens aier bonaed lod ncid ms bs aen cly eo&#x27;}</li>
<li>{&#x27;name&#x27;: &#x27;Raw Vision Model Output&#x27;, &#x27;text&#x27;: &#x27;{\n  &quot;brand&quot;: &quot;&quot;,\n  &quot;product_variant&quot;: &quot;&quot;,\n  &quot;product_family&quot;: &quot;water&quot;,\n  &quot;container_type&quot;: &quot;can&quot;,\n  &quot;container_spec&quot;: &quot;&quot;,\n  &quot;size_text&quot;: &quot;1 Can&quot;,\n  &quot;best_catalog_match&quot;: &quot;&quot;,\n  &quot;confidence&quot;: 0.0,\n  &quot;evidence&quot;: [&quot;ocr&quot;],\n  &quot;notes&quot;: &quot;The image shows a can with a nutrition facts label, indicating it is a beverage, likely water given the ingredients listed.&quot;}&#x27;}</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;water&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;1 Can&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a can with a nutrition facts label, indicating it is a beverage, likely water given the ingredients listed.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;water&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;1 Can&quot;,
  &quot;confidence&quot;: 0.5,
  &quot;reasons&quot;: [
    {
      &quot;name&quot;: &quot; OCR Text&quot;,
      &quot;text&quot;: &quot;nutrition facts serving l cain spesn calorie o taaes tolal fal suduny up lolal ca poten ngrolens aier bonaed lod ncid ms bs aen cly eo&quot;
    },
    {
      &quot;name&quot;: &quot;Raw Vision Model Output&quot;,
      &quot;text&quot;: &quot;{\n  \&quot;brand\&quot;: \&quot;\&quot;,\n  \&quot;product_variant\&quot;: \&quot;\&quot;,\n  \&quot;product_family\&quot;: \&quot;water\&quot;,\n  \&quot;container_type\&quot;: \&quot;can\&quot;,\n  \&quot;container_spec\&quot;: \&quot;\&quot;,\n  \&quot;size_text\&quot;: \&quot;1 Can\&quot;,\n  \&quot;best_catalog_match\&quot;: \&quot;\&quot;,\n  \&quot;confidence\&quot;: 0.0,\n  \&quot;evidence\&quot;: [\&quot;ocr\&quot;],\n  \&quot;notes\&quot;: \&quot;The image shows a can with a nutrition facts label, indicating it is a beverage, likely water given the ingredients listed.\&quot;}&quot;
    }
  ]
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
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>LaCroix</td></tr>
<tr><th align='left'>Product</th><td>LaCroix Sparkling Lemon</td></tr>
<tr><th align='left'>Variant</th><td>Sparkling Lemon</td></tr>
<tr><th align='left'>Category</th><td>sparkling water</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>0-SWEETENER 0-SODIUM can</td></tr>
<tr><th align='left'>Size</th><td>0-SWEETENER 0-SODIUM</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>sparkl co ing lemo naturaly e ax sweet sine sodie</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>0-SWEETENER 0-SODIUM</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>LaCroix</td></tr>
<tr><th align='left'>VLM Variant</th><td>Sparkling Lemon</td></tr>
<tr><th align='left'>VLM Family</th><td>sparkling water</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>LaCroix</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Sparkling Lemon</td></tr>
<tr><th align='left'>Resolver Family</th><td>sparkling water</td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;LaCroix&quot;,
  &quot;product_variant&quot;: &quot;Sparkling Lemon&quot;,
  &quot;product_family&quot;: &quot;sparkling water&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;recyclable&quot;,
  &quot;size_text&quot;: &quot;0-SWEETENER 0-SODIUM&quot;,
  &quot;best_catalog_match&quot;: &quot;LaCroix Sparkling Water&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The can is labeled as &#x27;Sparkling Lemon&#x27; and &#x27;Naturally&#x27;, indicating it is a sparkling water product.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{&quot;brand&quot;: &quot;LaCroix&quot;, &quot;product_variant&quot;: &quot;Sparkling Lemon&quot;, &quot;product_family&quot;: &quot;sparkling water&quot;, &quot;container_type&quot;: &quot;can&quot;, &quot;container_spec&quot;: &quot;recyclable&quot;, &quot;size_text&quot;: &quot;&quot;, &quot;confidence&quot;: 0.9, &quot;reasons&quot;: []}</pre>
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
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Fanta, sparkling water, 500ml can</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Fanta</td></tr>
<tr><th align='left'>Product</th><td>Fanta</td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td>sparkling water</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>500ml can</td></tr>
<tr><th align='left'>Size</th><td>500ml</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>cas won cous cesnasse tmaneen soan enaics caavm</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>500ml</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Fanta</td></tr>
<tr><th align='left'>VLM Variant</th><td>Sparkling Water</td></tr>
<tr><th align='left'>VLM Family</th><td>sparkling water</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Fanta</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Sparkling Water</td></tr>
<tr><th align='left'>Resolver Family</th><td>sparkling water</td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Fanta&quot;,
  &quot;product_variant&quot;: &quot;Sparkling Water&quot;,
  &quot;product_family&quot;: &quot;sparkling water&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;500ml&quot;,
  &quot;best_catalog_match&quot;: &quot;Fanta Sparkling Water&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a can with the Fanta logo and the text &#x27;Sparkling Water&#x27; on it.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```
{
  &quot;brand&quot;: &quot;Fanta&quot;,
  &quot;product_variant&quot;: &quot;Sparkling Water&quot;,
  &quot;product_family&quot;: &quot;sparkling water&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;500ml&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}
```

Explanation:

- The brand has been normalized to the canonical consumer-facing name &quot;Fanta&quot;.
- While there is a generic match in the vision model output, the OCR text provides more specific details.
- The product family has also been matched to ensure consistency with the product variant.
- Confidence level of 0.9 is high enough for this instance, given the accurate information from both sources.

The `reasons` array is empty as there are no hallucinations or conflicting information sources to justify any alternative values.</pre>
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
<tr><th align='left'>Display Name</th><td>L&#x27;Allegrino Lime, juice, 330ml can</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>L&#x27;Allegrino</td></tr>
<tr><th align='left'>Product</th><td>L&#x27;Allegrino Lime</td></tr>
<tr><th align='left'>Variant</th><td>Lime</td></tr>
<tr><th align='left'>Category</th><td>juice</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>330ml can</td></tr>
<tr><th align='left'>Size</th><td>330ml</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>uien og falow sudaed erult juices wpalico soa sumpelilcn d tes sa 5a2 ruptd los lecringi in nads sio dtind cooe lite wresta fot t nsunc away sd sanon aok nein uperaye aseudel yleaxo e ots ime mua eraun seaits r o s une nl</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>330ml</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>L&#x27;Allegrino</td></tr>
<tr><th align='left'>VLM Variant</th><td>Lime</td></tr>
<tr><th align='left'>VLM Family</th><td>juice</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td></td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;L&#x27;Allegrino&quot;,
  &quot;product_variant&quot;: &quot;Lime&quot;,
  &quot;product_family&quot;: &quot;juice&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;recyclable&quot;,
  &quot;size_text&quot;: &quot;330ml&quot;,
  &quot;best_catalog_match&quot;: &quot;sparkling water&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The can is labeled as containing fruit juices and has a lime flavor, which aligns with the &#x27;juice&#x27; product family. The presence of a recycling symbol and the &#x27;recyclable&#x27; text on the can suggests it is a recyclable container.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
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
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Lucozade, sparkling water, 330ml can</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Lucozade</td></tr>
<tr><th align='left'>Product</th><td>Lucozade</td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td>sparkling water</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>330ml can</td></tr>
<tr><th align='left'>Size</th><td>330ml</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>caloaeh nocent</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>330ml</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Lucozade</td></tr>
<tr><th align='left'>VLM Variant</th><td>Sparkling Water</td></tr>
<tr><th align='left'>VLM Family</th><td>sparkling water</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
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
  &quot;brand&quot;: &quot;Lucozade&quot;,
  &quot;product_variant&quot;: &quot;Sparkling Water&quot;,
  &quot;product_family&quot;: &quot;Sparkling Water&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;green&quot;,
  &quot;size_text&quot;: &quot;330ml&quot;,
  &quot;best_catalog_match&quot;: &quot;Lucozade Sparkling Water&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;shape&quot;],
  &quot;notes&quot;: &quot;The can is green with a logo that appears to be &#x27;Lucozade&#x27;, and the shape is consistent with a can.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;sparkling water&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;green&quot;,
  &quot;size_text&quot;: &quot;330ml&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
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
        <tr><th align='left'>Detection</th><td>weak</td></tr>
<tr><th align='left'>Display Name</th><td>yogurt tub</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td>yogurt</td></tr>
<tr><th align='left'>Container</th><td>tub</td></tr>
<tr><th align='left'>Package</th><td>100 ml tub</td></tr>
<tr><th align='left'>Size</th><td>100 ml</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>us tste v inl</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>100 ml</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td>yogurt</td></tr>
<tr><th align='left'>VLM Container</th><td>tub</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td></td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      
      
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
  &quot;size_text&quot;: &quot;100 ml&quot;,
  &quot;best_catalog_match&quot;: &quot;yogurt tub&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;shape&quot;, &quot;size_text&quot;],
  &quot;notes&quot;: &quot;The container appears to be a single compartment yogurt tub based on its shape and the size text &#x27;100 ml&#x27;.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: []
}

This is the normalized output for a single consumer package.

The OCR text and raw vision model output were used together to make the following adjustments:

*   The brand was set to an empty string due to lack of reliable information.
*   Since there&#x27;s no clear indication that this yogurt tub has Mountain Dew or Coca-Cola inside, it is uncertain whether the product is actually a specific variant of either of these brands. However, both are typically packaged in tubs.

The normalized output will be adjusted based on new data available.

Best regards,
AI assistant</pre>
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
<tr><th align='left'>Display Name</th><td>Gotham Greens Baby Butterhead, produce, Sustainably Grown Lettuce tub</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Gotham Greens</td></tr>
<tr><th align='left'>Product</th><td>Gotham Greens Baby Butterhead</td></tr>
<tr><th align='left'>Variant</th><td>Baby Butterhead</td></tr>
<tr><th align='left'>Category</th><td>produce</td></tr>
<tr><th align='left'>Container</th><td>tub</td></tr>
<tr><th align='left'>Package</th><td>Sustainably Grown Lettuce tub</td></tr>
<tr><th align='left'>Size</th><td>Sustainably Grown Lettuce</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>butterhead s s lonuce ages en g nobiy</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>Sustainably Grown Lettuce</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Gotham Greens</td></tr>
<tr><th align='left'>VLM Variant</th><td>Baby Butterhead</td></tr>
<tr><th align='left'>VLM Family</th><td>produce</td></tr>
<tr><th align='left'>VLM Container</th><td>tub</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td>Baby Butterhead</td></tr>
<tr><th align='left'>Resolver Family</th><td>produce</td></tr>
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
  &quot;size_text&quot;: &quot;Sustainably Grown Lettuce&quot;,
  &quot;best_catalog_match&quot;: &quot;lettuce&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a circular container with a label indicating it contains baby butterhead lettuce, which is a type of lettuce. The label also mentions &#x27;Sustainably Grown Lettuce,&#x27; suggesting it is a produce item.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>Here&#x27;s the JSON output after normalizing noisy OCR and vision outputs for a single consumer package:

```
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;Baby Butterhead&quot;,
  &quot;product_family&quot;: &quot;produce&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;Sustainably Grown Lettuce&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}
```

Explanation of the choices made:

1. Brand normalization: The vision model output provided a brand name, but the OCR text was noisy and not easily recognizable as a specific brand. Given that the brand is not generic (e.g., yogurt, soda, juice) and there are no barcodes to validate the information, we decided to set the `brand` field to empty.
2. Product variant: The vision model output provided a product variant name (`Baby Butterhead`), which was correctly normalized.
3. Product family: The vision model output provided a product family name (`produce`), which is also correct and not generic.
4. Container type and specification: The vision model output provided accurate information about the container type (`tub`) and specification (`plastic`).
5. Size text: The vision model output provided an accurate size text description (`Sustainably Grown Lettuce`).
6. Confidence: We accepted the confidence value from the vision model output (0.8), as it is a reliable source of information.
7. Reasons: Since we did not find any specific reasons or discrepancies in the OCR or vision outputs, we chose to leave this field empty.

Note that this normalization decision was based on the provided rules and the output from both the OCR text and the raw vision model. If more accurate information were available from either source, it would be incorporated into the final JSON output.</pre>
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
<tr><th align='left'>Display Name</th><td>Aqua Sparkling Lime Water, sparkling water, 0-calorie can</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Aqua</td></tr>
<tr><th align='left'>Product</th><td>Aqua Sparkling Lime Water</td></tr>
<tr><th align='left'>Variant</th><td>Sparkling Lime Water</td></tr>
<tr><th align='left'>Category</th><td>sparkling water</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>0-calorie can</td></tr>
<tr><th align='left'>Size</th><td>0-calorie</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>aovoo aon s avonn esims s jwn sss dn geon vn m</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>0-calorie</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Aqua</td></tr>
<tr><th align='left'>VLM Variant</th><td>Sparkling Lime Water</td></tr>
<tr><th align='left'>VLM Family</th><td>sparkling water</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Aqua</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Sparkling Lime Water</td></tr>
<tr><th align='left'>Resolver Family</th><td>sparkling water</td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Aqua&quot;,
  &quot;product_variant&quot;: &quot;Sparkling Lime Water&quot;,
  &quot;product_family&quot;: &quot;sparkling water&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;single&quot;,
  &quot;size_text&quot;: &quot;0-calorie&quot;,
  &quot;best_catalog_match&quot;: &quot;sparkling water&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a can of Aqua sparkling lime water with a green label and a blue logo.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>Here&#x27;s the JSON output normalized for the given OCR text and vision model output:

```
{
  &quot;brand&quot;: &quot;Aqua&quot;,
  &quot;product_variant&quot;: &quot;Sparkling Lime Water&quot;,
  &quot;product_family&quot;: &quot;sparkling water&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;single&quot;,
  &quot;size_text&quot;: &quot;0-calorie&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}
```

Here&#x27;s how this output was obtained:

- The OCR text provided a readable brand name: &quot;Aqua&quot;
- The raw vision model output also contained the same brand name.
- To verify that this is correct, we would ideally look at some other sources (like external databases or product catalogs) to confirm that the name of the product is indeed &quot;Sparkling Lime Water&quot; for Aqua.
- As there were no generic category words present in the OCR text or vision model output, I did not set brand to empty.</pre>
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
<tr><th align='left'>Display Name</th><td>sparkling water can</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td>sparkling water</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>can</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>bacts niiriton sic natuns caories fioe ae dv s taturb l sis s</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td>sparkling water</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td></td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;sparkling water&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a can with a label that includes &#x27;Nutrition Facts&#x27; and &#x27;Calories&#x27;, which suggests it is a beverage. The text &#x27;Sparkling&#x27; is partially visible, indicating it might be a sparkling water product. However, the OCR text is not clear and there are no other visible indicators to confirm the product family or size.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: []
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
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>idsns to w ondaded o d c cacsy tes tvaenw delym onidoet onone saeel loroae ari onoes onieen unomtg</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>500 ML</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>San Pellegrino</td></tr>
<tr><th align='left'>VLM Variant</th><td>Mineral Water</td></tr>
<tr><th align='left'>VLM Family</th><td>water</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td></td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
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
  &quot;best_catalog_match&quot;: &quot;San Pellegrino Sparkling Water&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a green glass bottle with a label indicating it is San Pellegrino mineral water, with a size of 500 ML.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: []
}</pre>
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
        <tr><th align='left'>Detection</th><td>weak</td></tr>
<tr><th align='left'>Display Name</th><td>yogurt tub</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td>yogurt</td></tr>
<tr><th align='left'>Container</th><td>tub</td></tr>
<tr><th align='left'>Package</th><td>clamshell</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>o</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td>yogurt</td></tr>
<tr><th align='left'>VLM Container</th><td>tub</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td></td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>{&#x27;type&#x27;: &#x27;noisy_brand&#x27;, &#x27;value&#x27;: &#x27;&#x27;}</li></ul>
      
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
  &quot;container_spec&quot;: &quot;clamshell&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;clamshell tub&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;shape&quot;],
  &quot;notes&quot;: &quot;The container appears to be a clamshell-style tub commonly used for yogurt.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>Here is the normalized JSON output:

```
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: [
    {
      &quot;type&quot;: &quot;noisy_brand&quot;,
      &quot;value&quot;: &quot;&quot;
    }
  ]
}
```

In this normalized output, the `brand` field is set to an empty string due to the lack of identifiable information from both OCR text and raw vision model output. The product family (`product_family`) is also set to an empty string because it was not present in either input source.

The `confidence` value is updated based on the combined evidence from both sources, which indicates a confidence level of 0.8.

Note that there are no specific &quot;reasons&quot; provided in this output, but instead a single entry with a type indicating why the brand field was set to an empty string (i.e., due to lack of information).</pre>
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
<tr><th align='left'>Display Name</th><td>round, metallic</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>jar</td></tr>
<tr><th align='left'>Package</th><td>round, metallic</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td></td></tr>
<tr><th align='left'>OCR Engine</th><td>none</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td></td></tr>
<tr><th align='left'>VLM Container</th><td>jar</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td></td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      
      
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
  &quot;container_spec&quot;: &quot;round, metallic&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a close-up of a metallic container with a circular opening, suggesting it could be a jar or can. The lack of branding, product information, or barcode makes it difficult to determine the exact product family or variant.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>Here is the JSON output after normalizing noisy OCR and vision outputs:

```
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: []
}
```

Explanation of the normalization rules applied:

1. No OCR text was provided, so no normalizations were made based on it.
2. The `brand` field was not specified in the raw vision model output, so we left it empty for now.
3. The `product_variant`, `product_family`, and `size_text` fields were also not specified in the raw vision model output, so they remained empty.
4. The `container_type` field was specified as &quot;jar&quot;, which is a valid value according to the schema.
5. However, the `notes` field in the raw vision model output contained information about a possible jar or can, but no specific product family or variant could be determined due to the lack of branding and barcode. Therefore, we set the confidence score to 0.0 and left the other fields empty.
6. We did not apply any normalizations based on the `best_catalog_match` field, as it was not provided in the raw vision model output.

If more information from the raw vision model output is available, additional normalizations could be applied to improve the accuracy of the extracted data.</pre>
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
<tr><th align='left'>Display Name</th><td>Sprite 0-SWEETENED, soda, 12 fl oz can</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Sprite</td></tr>
<tr><th align='left'>Product</th><td>Sprite 0-SWEETENED</td></tr>
<tr><th align='left'>Variant</th><td>0-SWEETENED</td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>12 fl oz can</td></tr>
<tr><th align='left'>Size</th><td>12 fl oz</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>ngov hon 6 vaugams e awn dnlig agonisse s s d o</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>12 fl oz</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Sprite</td></tr>
<tr><th align='left'>VLM Variant</th><td>0-SWEETENED</td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td></td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Sprite&quot;,
  &quot;product_variant&quot;: &quot;0-SWEETENED&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;12 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;Sprite Zero&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The can is labeled as &#x27;0-SWEETENED&#x27; and &#x27;LIME WATER&#x27;, indicating it is a sugar-free lime-flavored soda.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: []
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
<tr><th align='left'>Display Name</th><td>La Croix Lime, soda, 0-calorie can</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>La Croix</td></tr>
<tr><th align='left'>Product</th><td>La Croix Lime</td></tr>
<tr><th align='left'>Variant</th><td>Lime</td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>0-calorie can</td></tr>
<tr><th align='left'>Size</th><td>0-calorie</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>lin nauras osson er te oaswels gae</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>0-calorie</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>La Croix</td></tr>
<tr><th align='left'>VLM Variant</th><td>Lime</td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>La Croix</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Lime</td></tr>
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
  &quot;brand&quot;: &quot;La Croix&quot;,
  &quot;product_variant&quot;: &quot;Lime&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;recyclable&quot;,
  &quot;size_text&quot;: &quot;0-calorie&quot;,
  &quot;best_catalog_match&quot;: &quot;LaCroix Lime&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a can with the LaCroix logo and the word &#x27;Lime&#x27; on it, indicating it is a lime-flavored LaCroix soda.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;La Croix&quot;,
  &quot;product_variant&quot;: &quot;Lime&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;recyclable&quot;,
  &quot;size_text&quot;: &quot;0-calorie&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}</pre>
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
<tr><th align='left'>Display Name</th><td>Sanpellegrino Blood Orange, juice, 330ml can</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Sanpellegrino</td></tr>
<tr><th align='left'>Product</th><td>Sanpellegrino Blood Orange</td></tr>
<tr><th align='left'>Variant</th><td>Blood Orange</td></tr>
<tr><th align='left'>Category</th><td>juice</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>330ml can</td></tr>
<tr><th align='left'>Size</th><td>330ml</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>ioton aare p watwn or with c real q n mo cagin d sanpelis nans dal esine c to runn i laliar oauns br sht d h s cia bloods c run unan tsos</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>330ml</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Sanpellegrino</td></tr>
<tr><th align='left'>VLM Variant</th><td>Blood Orange</td></tr>
<tr><th align='left'>VLM Family</th><td>juice</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Sanpellegrino</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Blood Orange</td></tr>
<tr><th align='left'>Resolver Family</th><td>juice</td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>{&#x27;key&#x27;: &#x27;normalized_brand_output&#x27;, &#x27;value&#x27;: &#x27;Sanpellegrino&#x27;}</li>
<li>{&#x27;key&#x27;: &#x27;brand_confidence&#x27;, &#x27;value&#x27;: 0.9}</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Sanpellegrino&quot;,
  &quot;product_variant&quot;: &quot;Blood Orange&quot;,
  &quot;product_family&quot;: &quot;juice&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;recyclable&quot;,
  &quot;size_text&quot;: &quot;330ml&quot;,
  &quot;best_catalog_match&quot;: &quot;Sanpellegrino Blood Orange Sparkling Water&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a can with a label indicating it is Sanpellegrino Blood Orange, which is a type of sparkling water.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;Sanpellegrino&quot;,
  &quot;product_variant&quot;: &quot;Blood Orange&quot;,
  &quot;product_family&quot;: &quot;juice&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;recyclable&quot;,
  &quot;size_text&quot;: &quot;330ml&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: [
    {
      &quot;key&quot;: &quot;normalized_brand_output&quot;,
      &quot;value&quot;: &quot;Sanpellegrino&quot;
    },
    {
      &quot;key&quot;: &quot;brand_confidence&quot;,
      &quot;value&quot;: 0.9
    }
  ]
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
<tr><th align='left'>Display Name</th><td>Coca-Cola Blood Orange, juice, 10 can</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Product</th><td>Coca-Cola Blood Orange</td></tr>
<tr><th align='left'>Variant</th><td>Blood Orange</td></tr>
<tr><th align='left'>Category</th><td>juice</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>10 can</td></tr>
<tr><th align='left'>Size</th><td>10</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>aluminium</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>cocac io lens sies</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>10</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>CIA</td></tr>
<tr><th align='left'>VLM Variant</th><td>Blood Orange</td></tr>
<tr><th align='left'>VLM Family</th><td>juice</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Blood Orange</td></tr>
<tr><th align='left'>Resolver Family</th><td>juice</td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;CIA&quot;,
  &quot;product_variant&quot;: &quot;Blood Orange&quot;,
  &quot;product_family&quot;: &quot;juice&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;single&quot;,
  &quot;size_text&quot;: &quot;10&quot;,
  &quot;best_catalog_match&quot;: &quot;juice&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a can with a logo and text indicating it is a juice product.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```
{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;Blood Orange&quot;,
  &quot;product_family&quot;: &quot;juice&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;single&quot;,
  &quot;size_text&quot;: &quot;10&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}
```</pre>
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
<tr><th align='left'>Display Name</th><td>Sanpellegrino Blood Orange, juice, 1508 g can</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Sanpellegrino</td></tr>
<tr><th align='left'>Product</th><td>Sanpellegrino Blood Orange</td></tr>
<tr><th align='left'>Variant</th><td>Blood Orange</td></tr>
<tr><th align='left'>Category</th><td>juice</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>1508 g can</td></tr>
<tr><th align='left'>Size</th><td>1508 g</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>ce suke with ca real ne nacen s anpellit aso dat cea einr sutna tallan an biflds t eseon less ciag fo blood suc s eant ops mnsson s 1157 1508 g 0 silhae ono</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>1508 g</td></tr>
<tr><th align='left'>Barcodes</th><td>04159490 &lt;br/&gt;&lt;small&gt;&lt;i&gt;(via OpenCV BarcodeDetector)&lt;/i&gt; -&gt; &lt;b&gt;No DB Match&lt;/b&gt;&lt;/small&gt;</td></tr>
<tr><th align='left'>VLM Brand</th><td>Sanpellegrino</td></tr>
<tr><th align='left'>VLM Variant</th><td>Blood Orange</td></tr>
<tr><th align='left'>VLM Family</th><td>juice</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Sanpellegrino</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Blood Orange</td></tr>
<tr><th align='left'>Resolver Family</th><td>juice</td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>{&#x27;reason&#x27;: &#x27;OCR text and raw vision model output match&#x27;}</li>
<li>{&#x27;reason&#x27;: &#x27;Barcode scan confirmed brand as Sanpellegrino&#x27;}</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Sanpellegrino&quot;,
  &quot;product_variant&quot;: &quot;Blood Orange&quot;,
  &quot;product_family&quot;: &quot;juice&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;recyclable&quot;,
  &quot;size_text&quot;: &quot;330 ml&quot;,
  &quot;best_catalog_match&quot;: &quot;Sanpellegrino Ciao Blood Orange&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a can with a label indicating it is a Sanpellegrino Ciao Blood Orange juice drink.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```
{
  &quot;brand&quot;: &quot;Sanpellegrino&quot;,
  &quot;product_variant&quot;: &quot;Blood Orange&quot;,
  &quot;product_family&quot;: &quot;juice&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;recyclable&quot;,
  &quot;size_text&quot;: &quot;330 ml&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: [
    {
      &quot;reason&quot;: &quot;OCR text and raw vision model output match&quot;
    },
    {
      &quot;reason&quot;: &quot;Barcode scan confirmed brand as Sanpellegrino&quot;
    }
  ]
}
```</pre>
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
<tr><th align='left'>Display Name</th><td>Ciao! Sliced Orange, juice, 10 fl oz can</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Ciao!</td></tr>
<tr><th align='left'>Product</th><td>Ciao! Sliced Orange</td></tr>
<tr><th align='left'>Variant</th><td>Sliced Orange</td></tr>
<tr><th align='left'>Category</th><td>juice</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>10 fl oz can</td></tr>
<tr><th align='left'>Size</th><td>10 fl oz</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>20 d do coot dfdo ovle eve sa ise se ol vs in oha sie ns hu ivan line</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>10 fl oz</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Ciao!</td></tr>
<tr><th align='left'>VLM Variant</th><td>Sliced Orange</td></tr>
<tr><th align='left'>VLM Family</th><td>juice</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td></td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Ciao!&quot;,
  &quot;product_variant&quot;: &quot;Sliced Orange&quot;,
  &quot;product_family&quot;: &quot;juice&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;10 fl oz&quot;,
  &quot;size_text&quot;: &quot;10 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;juice&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a can with a logo and text indicating it is a juice product.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: []
}

This JSON object shows the normalized and cleaned consumer package data.

Brand: The brand was normalized to &quot;Coca-Cola&quot; based on the OCR text, which contains recognizable characters of this well-known brand name. 

Note that there were some generic identifiable elements detected by the vision model output (e.g., a container type of &#x27;can&#x27; with a size of 10 fl oz). However, these elements do not appear to match any known products, and so they have been left out of the final normalized JSON object.

The &quot;confidence&quot; value has been set to 0.0 because while both OCR text and raw vision model output contain recognizable characters for this product, neither is particularly robust or reliable, leading me to rely on external knowledge databases (i.e., brand names) over these noisy outputs.

Additionally, the &#x27;reasons&#x27; list contains some information about how the package was identified, but based on my internal database of well-known products and their characteristics, I have decided that more robust data would be necessary for a reliable product identification.</pre>
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
<tr><th align='left'>Display Name</th><td>Tepache Mango Chileno, soda, 12 fl oz can</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Tepache</td></tr>
<tr><th align='left'>Product</th><td>Tepache Mango Chileno</td></tr>
<tr><th align='left'>Variant</th><td>Mango Chileno</td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>12 fl oz can</td></tr>
<tr><th align='left'>Size</th><td>12 fl oz</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>liets ss s so oanvw ll taho 5 nvoixew hoesd vaos naegow cnases s jaivo m ds d</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>12 fl oz</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Tepache</td></tr>
<tr><th align='left'>VLM Variant</th><td>Mango Chileno</td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Tepache</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Mango Chileno</td></tr>
<tr><th align='left'>Resolver Family</th><td>soda</td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>{&#x27;name&#x27;: &#x27;vision model output consistency&#x27;}</li>
<li>{&#x27;name&#x27;: &#x27;OCR text matches vision model output&#x27;}</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Tepache&quot;,
  &quot;product_variant&quot;: &quot;Mango Chileno&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;12 fl oz&quot;,
  &quot;size_text&quot;: &quot;12 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;soda&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a can with the brand name &#x27;Tepache&#x27; and the product variant &#x27;Mango Chileno&#x27;. The text &#x27;Modern Mexican Soda&#x27; is also visible, confirming it is a soda product.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;Tepache&quot;,
  &quot;product_variant&quot;: &quot;Mango Chileno&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;12 fl oz&quot;,
  &quot;size_text&quot;: &quot;12 fl oz&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: [
    {
      &quot;name&quot;: &quot;vision model output consistency&quot;
    },
    {
      &quot;name&quot;: &quot;OCR text matches vision model output&quot;
    }
  ]
}</pre>
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
<tr><th align='left'>Display Name</th><td>Lemon Sparkling, soda, 12 fl oz can</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Lemon</td></tr>
<tr><th align='left'>Product</th><td>Lemon Sparkling</td></tr>
<tr><th align='left'>Variant</th><td>Sparkling</td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>12 fl oz can</td></tr>
<tr><th align='left'>Size</th><td>12 fl oz</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>lwa sr nets cs s d facls s s</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>12 fl oz</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Lemon</td></tr>
<tr><th align='left'>VLM Variant</th><td>Sparkling</td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Lemon</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Sparkling</td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
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
  &quot;product_variant&quot;: &quot;Sparkling&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;12 fl oz&quot;,
  &quot;size_text&quot;: &quot;12 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;soda&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a yellow can with a logo and text indicating it is a sparkling lemon soda.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```
{
  &quot;brand&quot;: &quot;Lemon&quot;,
  &quot;product_variant&quot;: &quot;Sparkling&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;Can&quot;,
  &quot;container_spec&quot;: &quot;12 fl oz&quot;,
  &quot;size_text&quot;: &quot;12 fl oz&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}
```

In this JSON response:

- We&#x27;ve normalized the noisy brand string to a canonical consumer-facing name, `&quot;Lemon&quot;`.
- The product variant is set to `&quot;Sparkling&quot;` as per the raw vision model output.
- Since only generic categories like yogurt and soda were allowed in the original instructions, `product_family` is left empty.
- The container type is standardized to &quot;Can&quot;.
- We&#x27;ve kept the container specification intact from the raw vision model output.
- The size text remains the same.
- Confidence is set to 0.8 based on the raw vision model output.
- Since both OCR text and raw vision model output were used, we&#x27;ve included a note explaining this in the `reasons` array.

This JSON response adheres to all specified rules:

1. Normalizes noisy brand strings to canonical names
2. Leaves generic categories empty if not explicitly identifiable
3. Excludes generic category words like yogurt, soda, juice, bottle, can, cup, tub, or container
4. Prioritizes empty values over hallucinated details
5. Utilizes both OCR text and raw vision model output</pre>
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
<tr><th align='left'>Display Name</th><td>Ferrero Hazelnut Spread with Cocoa, spread, NET WT 26.5 OZ (750g) jar</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Ferrero</td></tr>
<tr><th align='left'>Product</th><td>Ferrero Hazelnut Spread with Cocoa</td></tr>
<tr><th align='left'>Variant</th><td>Hazelnut Spread with Cocoa</td></tr>
<tr><th align='left'>Category</th><td>spread</td></tr>
<tr><th align='left'>Container</th><td>jar</td></tr>
<tr><th align='left'>Package</th><td>NET WT 26.5 OZ (750g) jar</td></tr>
<tr><th align='left'>Size</th><td>NET WT 26.5 OZ (750g)</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>ncimen voodd hia oneds ouaauaa londenn mononi ds goun ion c disunnw y jor s w sihl ds d ploennu</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>NET WT 26.5 OZ (750g)</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
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
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;NET WT 26.5 OZ (750g)&quot;,
  &quot;best_catalog_match&quot;: &quot;Nutella Hazelnut Spread&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a jar of Nutella, a well-known hazelnut spread.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;Ferrero&quot;,
  &quot;product_variant&quot;: &quot;Hazelnut Spread with Cocoa&quot;,
  &quot;product_family&quot;: &quot;spread&quot;,
  &quot;container_type&quot;: &quot;jar&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;NET WT 26.5 OZ (750g)&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}</pre>
</details>
