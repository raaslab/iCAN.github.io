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
<tr><th align='left'>Material (OpenFoodFacts)</th><td>plastic</td></tr>
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
  &quot;container_spec&quot;: &quot;1 gallon&quot;,
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;1 gallon&quot;,
  &quot;best_catalog_match&quot;: &quot;milk jug&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;shape&quot;],
  &quot;notes&quot;: &quot;The container is designed to hold a liquid, likely milk, given its shape and size.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>Here is the normalized JSON output:

```
{
  &quot;brand&quot;: &quot;milk&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;jug&quot;,
  &quot;container_spec&quot;: &quot;1 gallon&quot;,
  &quot;size_text&quot;: &quot;1 gallon&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}
```

Explanation:

*   We normalized the brand to its canonical consumer-facing name based on the raw vision model output, which indicated a dairy product in a jug.
*   Since no OCR text was provided, we relied solely on the raw vision model output for determining the brand and other details.
*   The brand is not empty but rather &quot;milk,&quot; as it&#x27;s a specific type of dairy product.
*   We set `product_variant` to an empty string since there was no information available in either the OCR text or raw vision model output about a specific variant.
*   All other fields have been populated based on the provided data from the raw vision model output.</pre>
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
<tr><th align='left'>Display Name</th><td>Chobani Zero Added Sugar, dairy, NET WT 6.25 OZ tub</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Chobani</td></tr>
<tr><th align='left'>Product</th><td>Chobani Zero Added Sugar</td></tr>
<tr><th align='left'>Variant</th><td>Zero Added Sugar</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>tub</td></tr>
<tr><th align='left'>Package</th><td>NET WT 6.25 OZ tub</td></tr>
<tr><th align='left'>Size</th><td>NET WT 6.25 OZ</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>plastic</td></tr>
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
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>tub</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Chobani</td></tr>
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
  &quot;brand&quot;: &quot;Chobani&quot;,
  &quot;product_variant&quot;: &quot;Zero Added Sugar&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;20g Protein&quot;,
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;NET WT 6.25 OZ&quot;,
  &quot;best_catalog_match&quot;: &quot;yogurt&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a close-up of a Chobani yogurt container with text indicating it is a low-fat, zero-added-sugar, vanilla flavored yogurt with 20g of protein per serving.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;Chobani&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}

The `brand` was normalized from the raw vision model output which contained more specific details about the product, like protein content and product variant name. The other fields in the JSON were set to their default values as there wasn&#x27;t enough information available from the OCR text or the vision model to determine them with confidence.</pre>
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
<tr><th align='left'>Material (OpenFoodFacts)</th><td>plastic</td></tr>
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
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;200 ml&quot;,
  &quot;best_catalog_match&quot;: &quot;Coca-Cola 200ml bottle&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a clear plastic bottle with a red label, which is characteristic of Coca-Cola bottles. The OCR text and logo are consistent with the brand and product.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;Original&quot;,
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
<tr><th align='left'>Display Name</th><td>Diet Coke Zero, soda, 20 fl oz bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Diet Coke</td></tr>
<tr><th align='left'>Product</th><td>Diet Coke Zero</td></tr>
<tr><th align='left'>Variant</th><td>Zero</td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>20 fl oz bottle</td></tr>
<tr><th align='left'>Size</th><td>20 fl oz</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>pet 1 polyethylene terephthalate</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>0 ox te boll</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>20 fl oz</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Diet Coke</td></tr>
<tr><th align='left'>VLM Variant</th><td>Zero</td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Diet Coke</td></tr>
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
  &quot;brand&quot;: &quot;Diet Coke&quot;,
  &quot;product_variant&quot;: &quot;Zero&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;20 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;soda&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a plastic bottle with a label indicating it is Diet Coke Zero, a 20 fl oz bottle.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{&quot;brand&quot;: &quot;Diet Coke&quot;, &quot;product_variant&quot;: &quot;&quot;, &quot;product_family&quot;: &quot;soda&quot;, &quot;container_type&quot;: &quot;bottle&quot;, &quot;container_spec&quot;: &quot;&quot;, &quot;size_text&quot;: &quot;20 fl oz&quot;, &quot;confidence&quot;: 0.9, &quot;reasons&quot;: []}</pre>
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
<tr><th align='left'>Material (OpenFoodFacts)</th><td>plastic</td></tr>
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
<tr><th align='left'>Resolver Brand</th><td>Pepsi</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Diet</td></tr>
<tr><th align='left'>Resolver Family</th><td>soda</td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>{&#x27;reason&#x27;: &#x27;OCR text and raw vision model output match&#x27;}</li></ul>
      
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
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;500 mL&quot;,
  &quot;best_catalog_match&quot;: &quot;diet soda bottle&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a clear plastic bottle with the Pepsi logo and &#x27;Diet&#x27; text, indicating it is a diet soda.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```
{
  &quot;brand&quot;: &quot;Pepsi&quot;,
  &quot;product_variant&quot;: &quot;Diet&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;500 mL&quot;,
  &quot;size_text&quot;: &quot;500 mL&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: [
    {
      &quot;reason&quot;: &quot;OCR text and raw vision model output match&quot;
    }
  ]
}
```</pre>
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
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Chobani</td></tr>
<tr><th align='left'>Product</th><td>Chobani Greek Yogurt</td></tr>
<tr><th align='left'>Variant</th><td>Greek Yogurt</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>tub</td></tr>
<tr><th align='left'>Package</th><td>5.3 OZ (150g) tub</td></tr>
<tr><th align='left'>Size</th><td>5.3 OZ (150g)</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>plastic</td></tr>
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
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Chobani</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Greek Yogurt</td></tr>
<tr><th align='left'>Resolver Family</th><td>dairy</td></tr>
<tr><th align='left'>Resolver Container</th><td>tub</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>raw vision model output was accurate</li>
<li>OCR text was noisy and needed normalization</li></ul>
      
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
  &quot;container_spec&quot;: &quot;5.3 OZ (150g)&quot;,
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;5.3 OZ (150g)&quot;,
  &quot;best_catalog_match&quot;: &quot;Greek Yogurt&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a close-up of a Chobani Greek Yogurt container with a focus on the nutrition facts label and the top of the container.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;Chobani&quot;,
  &quot;product_variant&quot;: &quot;Greek Yogurt&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;5.3 OZ (150g)&quot;,
  &quot;size_text&quot;: &quot;5.3 OZ (150g)&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: [
    &quot;raw vision model output was accurate&quot;,
    &quot;OCR text was noisy and needed normalization&quot;
  ]
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
<tr><th align='left'>Display Name</th><td>Orville Redenbacher&#x27;s Original, popcorn, 10 oz jar</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Orville Redenbacher&#x27;s</td></tr>
<tr><th align='left'>Product</th><td>Orville Redenbacher&#x27;s Original</td></tr>
<tr><th align='left'>Variant</th><td>Original</td></tr>
<tr><th align='left'>Category</th><td>popcorn</td></tr>
<tr><th align='left'>Container</th><td>jar</td></tr>
<tr><th align='left'>Package</th><td>10 oz jar</td></tr>
<tr><th align='left'>Size</th><td>10 oz</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>plastic</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>ivnidiao suaypdquapay ailajo wanivt xoon</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>10 oz</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Orville Redenbacher&#x27;s</td></tr>
<tr><th align='left'>VLM Variant</th><td>Original</td></tr>
<tr><th align='left'>VLM Family</th><td>popcorn</td></tr>
<tr><th align='left'>VLM Container</th><td>jar</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Orville Redenbacher&#x27;s</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Original</td></tr>
<tr><th align='left'>Resolver Family</th><td>popcorn</td></tr>
<tr><th align='left'>Resolver Container</th><td>jar</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>OCR text did not match expected format for product name</li>
<li>Vision model output was more accurate</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Orville Redenbacher&#x27;s&quot;,
  &quot;product_variant&quot;: &quot;Original&quot;,
  &quot;product_family&quot;: &quot;popcorn&quot;,
  &quot;container_type&quot;: &quot;jar&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;10 oz&quot;,
  &quot;best_catalog_match&quot;: &quot;popcorn&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a jar of Orville Redenbacher&#x27;s popcorn, which is a popular brand of microwave popcorn. The label indicates it is the &#x27;Original&#x27; flavor.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;Orville Redenbacher&#x27;s&quot;,
  &quot;product_variant&quot;: &quot;Original&quot;,
  &quot;product_family&quot;: &quot;popcorn&quot;,
  &quot;container_type&quot;: &quot;jar&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;10 oz&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: [
    &quot;OCR text did not match expected format for product name&quot;,
    &quot;Vision model output was more accurate&quot;
  ]
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
<tr><th align='left'>Material (OpenFoodFacts)</th><td>plastic</td></tr>
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
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;5.3 oz (150g)&quot;,
  &quot;best_catalog_match&quot;: &quot;Greek Yogurt&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a close-up of a yogurt container with text indicating it is nonfat Greek yogurt with probiotics. The container is made of plastic and has a tub shape.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
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
<tr><th align='left'>Display Name</th><td>Mountain Dew, 18-cup ice cube tray</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td>Mountain Dew</td></tr>
<tr><th align='left'>Product</th><td>Mountain Dew</td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>clamshell</td></tr>
<tr><th align='left'>Package</th><td>18-cup ice cube tray</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>plastic</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>anty amen san emnd shen aniten zoo sops aine snav nves</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td></td></tr>
<tr><th align='left'>VLM Container</th><td>clamshell</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Mountain Dew</td></tr>
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
  &quot;container_spec&quot;: &quot;18-cup ice cube tray&quot;,
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a clear plastic ice cube tray with 18 compartments, which is typically used for making ice cubes. The OCR text and barcode are not relevant to the identification of the container.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```
{
  &quot;brand&quot;: &quot;Mountain Dew&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;clamshell&quot;,
  &quot;container_spec&quot;: &quot;18-cup ice cube tray&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: []
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
<tr><th align='left'>Display Name</th><td>Mountain Dew, single use</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td>Mountain Dew</td></tr>
<tr><th align='left'>Product</th><td>Mountain Dew</td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>cup</td></tr>
<tr><th align='left'>Package</th><td>single use</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>plastic</td></tr>
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
<tr><th align='left'>Resolver Brand</th><td>Mountain Dew</td></tr>
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
  &quot;container_spec&quot;: &quot;single use&quot;,
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a single-use plastic cup with a lid, likely used for beverages.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>Here&#x27;s the JSON output:

```
{
  &quot;brand&quot;: &quot;Mountain Dew&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;cup&quot;,
  &quot;container_spec&quot;: &quot;single use&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: []
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
<tr><th align='left'>Display Name</th><td>squeezable</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>squeezable</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>plastic</td></tr>
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
<tr><th align='left'>Resolver Brand</th><td>Yogurt</td></tr>
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
  &quot;container_spec&quot;: &quot;squeezable&quot;,
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;],
  &quot;notes&quot;: &quot;The container appears to be a squeezable bottle, likely used for a liquid product, possibly a condiment or a similar item. The label is not legible, and there are no visible brand names or product information.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;Yogurt&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;squeezable&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: []
}</pre>
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
<tr><th align='left'>Material (OpenFoodFacts)</th><td>plastic</td></tr>
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
<tr><th align='left'>Resolver Brand</th><td>yogurt</td></tr>
<tr><th align='left'>Resolver Variant</th><td>original</td></tr>
<tr><th align='left'>Resolver Family</th><td>dairy</td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>Raw vision model output had a high confidence level and provided detailed information about the product.</li></ul>
      
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
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;16 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;yogurt&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The container is labeled as &#x27;Yogurt&#x27; and has a red cap, which is typical for yogurt bottles.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```
{
  &quot;brand&quot;: &quot;yogurt&quot;,
  &quot;product_variant&quot;: &quot;original&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;16 fl oz&quot;,
  &quot;size_text&quot;: &quot;16 fl oz&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: [
    &quot;Raw vision model output had a high confidence level and provided detailed information about the product.&quot;
  ]
}
```</pre>
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
<tr><th align='left'>Display Name</th><td>A&amp;W, recycled</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td>A&amp;W</td></tr>
<tr><th align='left'>Product</th><td>A&amp;W</td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>recycled</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>plastic</td></tr>
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
<tr><th align='left'>Resolver Brand</th><td>A&amp;W</td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>Noisy OCR output was used to fill in the brand name.</li></ul>
      
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
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;recycled&quot;, &quot;shape&quot;],
  &quot;notes&quot;: &quot;The bottle is made of recycled plastic, as indicated by the label.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;A&amp;W&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;recycled&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [
    &quot;Noisy OCR output was used to fill in the brand name.&quot;
  ]
}
```

Explanation of why these values were chosen:

- Brand: The OCR text included &quot;A and W&quot; which seems like a plausible brand name given the context.
- Product Variant, Family, and Size Text are empty because there is no clear information in either the OCR text or the raw vision model output that would allow us to fill them in with high confidence. If more data were available we could make a more accurate guess about the product variant.
- Confidence: The confidence level for this normalized result is set to 0 as it was determined by noisy OCR results rather than clear evidence from either the OCR text or vision model output itself.
- Reasons: An indication of how the brand name &quot;A&amp;W&quot; came to be filled in, based on the fact that there were &quot;noisy OCR results&quot;.</pre>
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
<tr><th align='left'>Material (OpenFoodFacts)</th><td>plastic</td></tr>
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
  &quot;brand&quot;: &quot;meijer&quot;,
  &quot;product_variant&quot;: &quot;Yogurt&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;16 fl oz&quot;,
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;16 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;yogurt&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The container is a plastic bottle with a red cap, labeled as yogurt with live and probiotic cultures.&quot;
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
<tr><th align='left'>Material (OpenFoodFacts)</th><td>plastic</td></tr>
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
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a circular, flat container with a lid, suggesting it is a tub or jar. The lack of visible branding, product information, or barcode makes it difficult to determine the exact product family or variant.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>Here&#x27;s an example of how you can normalize noisy OCR and vision outputs for a single consumer package based on the provided schema:

```json
{
  &quot;brand&quot;: &quot;Yogurt&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: []
}
```

This response contains the normalized `brand` field with the generic category word &quot;Yogurt&quot;. The other fields are empty, as there was not enough information provided to accurately determine them.

```json
{
  &quot;brand&quot;: &quot;Mt Dew&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: []
}
```

This response contains the normalized `brand` field with the generic category word &quot;Mt Dew&quot;. The other fields are empty, as there was not enough information provided to accurately determine them.

```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: []
}
```

This response contains the raw vision model output, which includes some information that can be used to make an educated guess about the product.

```json
{
  &quot;brand&quot;: &quot;A and W&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: []
}
```

This response contains the normalized `brand` field with the generic category word &quot;A and W&quot;. The other fields are empty, as there was not enough information provided to accurately determine them.

In general, if the OCR text or raw vision model output includes any information that can be used to make an educated guess about the product, it is likely better than relying solely on noisy data.</pre>
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
<tr><th align='left'>Display Name</th><td>Mt Dew, black, square, microwaveable</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td>Mt Dew</td></tr>
<tr><th align='left'>Product</th><td>Mt Dew</td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>clamshell</td></tr>
<tr><th align='left'>Package</th><td>black, square, microwaveable</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>metal</td></tr>
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
<tr><th align='left'>Resolver Brand</th><td>Mt Dew</td></tr>
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
  &quot;container_spec&quot;: &quot;black, square, microwaveable&quot;,
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;, &quot;text&quot;],
  &quot;notes&quot;: &quot;The container is black, square, and has a microwaveable label, suggesting it is designed for food storage or serving.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Mt Dew&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;clamshell&quot;,
  &quot;container_spec&quot;: &quot;black, square, microwaveable&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: []
}
```

I made the following assumptions and adjustments:

1. OCR text was not provided, so I assumed it would contain the brand name.
2. The `brand` field was set to an empty string using the raw vision model output.
3. The OCR text suggested that the product is a type of soda (e.g., &quot;s&quot;), which led me to conclude that the brand is &quot;Mt Dew&quot;.
4. I did not attempt to normalize any other fields in the raw vision model output, as they were either not relevant or not useful for this specific task.
5. The `confidence` field was set to 0.0, indicating that the OCR text and/or raw vision model output were not reliable.
6. The `reasons` field is empty, as there are no reasons provided in the original data.

Please note that these assumptions may not be accurate for all cases, and additional information or adjustments may be necessary to improve the accuracy of the normalized data.</pre>
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
<tr><th align='left'>Display Name</th><td>TE VINEGAR, condiment, 1 gallon jug</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>TE</td></tr>
<tr><th align='left'>Product</th><td>TE VINEGAR</td></tr>
<tr><th align='left'>Variant</th><td>VINEGAR</td></tr>
<tr><th align='left'>Category</th><td>condiment</td></tr>
<tr><th align='left'>Container</th><td>jug</td></tr>
<tr><th align='left'>Package</th><td>1 gallon jug</td></tr>
<tr><th align='left'>Size</th><td>1 gallon</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>hdpe 2 high density polyethylene, ♻️5 PP</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>s ce e s</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>1 gallon</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>TE</td></tr>
<tr><th align='left'>VLM Variant</th><td>VINEGAR</td></tr>
<tr><th align='left'>VLM Family</th><td>condiment</td></tr>
<tr><th align='left'>VLM Container</th><td>jug</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>TE</td></tr>
<tr><th align='left'>Resolver Variant</th><td>VINEGAR</td></tr>
<tr><th align='left'>Resolver Family</th><td>condiment</td></tr>
<tr><th align='left'>Resolver Container</th><td>jug</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;TE&quot;,
  &quot;product_variant&quot;: &quot;VINEGAR&quot;,
  &quot;product_family&quot;: &quot;condiment&quot;,
  &quot;container_type&quot;: &quot;jug&quot;,
  &quot;container_spec&quot;: &quot;1 gallon&quot;,
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;1 gallon&quot;,
  &quot;best_catalog_match&quot;: &quot;vinegar&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;shape&quot;, &quot;label&quot;],
  &quot;notes&quot;: &quot;The label indicates it is a vinegar product, and the shape and size suggest it is a jug.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```
{
  &quot;brand&quot;: &quot;TE&quot;,
  &quot;product_variant&quot;: &quot;VINEGAR&quot;,
  &quot;product_family&quot;: &quot;condiment&quot;,
  &quot;container_type&quot;: &quot;jug&quot;,
  &quot;container_spec&quot;: &quot;1 gallon&quot;,
  &quot;size_text&quot;: &quot;1 gallon&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}
```

Note that the `brand` has been normalized to a canonical consumer-facing name, and the other fields have been populated based on the raw vision model output.

The `brand` was normalized from &quot;TE&quot; to a more recognizable name using external knowledge of brands, in this case, it seems like &quot;Tea&quot;, but since we don&#x27;t have any information about tea being sold in 1 gallon jug, and Te is not in the list of generic category words that should be returned as empty, then we return what is provided from the model.</pre>
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
<tr><th align='left'>Display Name</th><td>s masbunass sijuonn mose s ies s oockin, can</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td>s masbunass sijuonn mose s ies s oockin</td></tr>
<tr><th align='left'>Product</th><td>s masbunass sijuonn mose s ies s oockin</td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>can</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>aluminum</td></tr>
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
<tr><th align='left'>Resolver Brand</th><td>s masbunass sijuonn mose s ies s oockin</td></tr>
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
  &quot;packaging_material&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a can with a yellow label, which is typically used for beverages. The OCR text and barcode are not present, and there are no clear indicators of the product family or variant.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;s masbunass sijuonn mose s ies s oockin&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: []
}</pre>
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
<tr><th align='left'>Display Name</th><td>Mountain Dew, soda, 140 can</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td>Mountain Dew</td></tr>
<tr><th align='left'>Product</th><td>Mountain Dew</td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>140 can</td></tr>
<tr><th align='left'>Size</th><td>140</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>aluminum</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>svn</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>140</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Mountain Dew</td></tr>
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
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;packaging_material&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;140&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;shape&quot;, &quot;text&quot;],
  &quot;notes&quot;: &quot;The can appears to be a beverage can, likely a soda can, given the shape and the size text &#x27;140&#x27;, which could indicate a volume in milliliters. The text &#x27;svn&#x27; and &#x27;BARCODES: (none)&#x27; suggest it might be a custom or private label can.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;Mountain Dew&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;140&quot;,
  &quot;confidence&quot;: 0,
  &quot;reasons&quot;: []
}

Here&#x27;s how the rules were applied:

1. OCR text: The provided OCR text &quot;svn&quot; was not recognized, so it wasn&#x27;t used in the normalization.
2. Barcode information: No barcode information was provided.
3. Normalization of brand:
   - &#x27;Coca-Cola&#x27; is matched with &quot;Coca-Cola&quot;
   - &#x27;Mt Dew&#x27; is matched with &quot;Mountain Dew&quot;
   - &#x27;A &amp; W&#x27; is matched with &quot;A&amp;W&quot;
   - The input &quot;svn&quot; wasn&#x27;t recognized
4. Product family: Since the raw vision model output contained the information that it&#x27;s a soda, but there was no explicit mention of the brand, it was not used in this case to match the product family.
5. Confidence level: The confidence level for this package is set to 0 because the OCR text did not provide any recognizable brand names.</pre>
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
        <tr><th align='left'>Detection</th><td>medium</td></tr>
<tr><th align='left'>Display Name</th><td>Mountain Dew, soda, can</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Mountain Dew</td></tr>
<tr><th align='left'>Product</th><td>Mountain Dew</td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>can</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>plastic</td></tr>
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
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Mountain Dew</td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td>soda</td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>The OCR text &quot;eoet bl&quot; was not recognized as a brand, but when combined with the raw vision model output, it appears to be &quot;Mountain Dew&quot;.</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;packaging_material&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a cropped view of a soda can with a visible barcode and text, suggesting it is a soda can.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>Here&#x27;s the normalized JSON output:

```
{
  &quot;brand&quot;: &quot;Mountain Dew&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: [
    &quot;The OCR text \&quot;eoet bl\&quot; was not recognized as a brand, but when combined with the raw vision model output, it appears to be \&quot;Mountain Dew\&quot;.&quot;
  ]
}
```</pre>
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
<tr><th align='left'>Material (OpenFoodFacts)</th><td>aluminum</td></tr>
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
  &quot;brand&quot;: &quot;Lemon&quot;,
  &quot;product_variant&quot;: &quot;Natural&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;aluminum&quot;,
  &quot;packaging_material&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;50&quot;,
  &quot;best_catalog_match&quot;: &quot;soda&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The can is labeled with &#x27;Lemon&#x27; and &#x27;Natural&#x27;, suggesting it is a lemon-flavored soda. The &#x27;50&#x27; on the can likely indicates the size in ounces.&quot;
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
<tr><th align='left'>Display Name</th><td>Strawberry, smoothie, 12 fl oz bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td>Strawberry</td></tr>
<tr><th align='left'>Variant</th><td>Strawberry</td></tr>
<tr><th align='left'>Category</th><td>smoothie</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>12 fl oz bottle</td></tr>
<tr><th align='left'>Size</th><td>12 fl oz</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>plastic</td></tr>
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
<tr><th align='left'>VLM Family</th><td>smoothie</td></tr>
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
  &quot;product_family&quot;: &quot;smoothie&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;squeeze bottle&quot;,
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;12 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;smoothie&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a close-up of a plastic bottle with a label indicating it is a strawberry-flavored smoothie. The OCR text appears to be a reversed version of the product name and flavor.&quot;
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
<tr><th align='left'>Display Name</th><td>Organic Gum Free, deodorant, 3.5 fl oz bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Organic</td></tr>
<tr><th align='left'>Product</th><td>Organic Gum Free</td></tr>
<tr><th align='left'>Variant</th><td>Gum Free</td></tr>
<tr><th align='left'>Category</th><td>deodorant</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>3.5 fl oz bottle</td></tr>
<tr><th align='left'>Size</th><td>3.5 fl oz</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>plastic</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>es d eganic s none o organes s lers gum gsas dl free ishew onien lolee d d 0 toug so cs s courjoid d t s ctn a stins epasues s dmi magle o s rputa bwo bwororss 8 n v pae o o ce cneo ron e s s sauofed lenn dren sioeg cne ts uopmin s oae a ae 8 e nlim c ameu nido an d</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>3.5 fl oz</td></tr>
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
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;3.5 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;deodorant&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a squeeze bottle with a label indicating it is a deodorant product.&quot;
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
<tr><th align='left'>Display Name</th><td>Cashew Mali Unsweetened, coffee creamer, 28 fl oz bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Cashew Mali</td></tr>
<tr><th align='left'>Product</th><td>Cashew Mali Unsweetened</td></tr>
<tr><th align='left'>Variant</th><td>Unsweetened</td></tr>
<tr><th align='left'>Category</th><td>coffee creamer</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>28 fl oz bottle</td></tr>
<tr><th align='left'>Size</th><td>28 fl oz</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>plastic</td></tr>
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
<tr><th align='left'>VLM Family</th><td>coffee creamer</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
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
  &quot;brand&quot;: &quot;Cashew Mali&quot;,
  &quot;product_variant&quot;: &quot;Unsweetened&quot;,
  &quot;product_family&quot;: &quot;coffee creamer&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;28 fl oz&quot;,
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;28 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;coffee creamer&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The product is organic, unsweetened, and contains 4 simple ingredients.&quot;
}
```</pre>
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
<tr><th align='left'>Display Name</th><td>Naturals Strawberry, juice, 16 fl oz bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Naturals</td></tr>
<tr><th align='left'>Product</th><td>Naturals Strawberry</td></tr>
<tr><th align='left'>Variant</th><td>Strawberry</td></tr>
<tr><th align='left'>Category</th><td>juice</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>16 fl oz bottle</td></tr>
<tr><th align='left'>Size</th><td>16 fl oz</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>plastic</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>ha gaas note ue strawberry minids bie n soiss ed ivanlvn</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>16 fl oz</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Naturals</td></tr>
<tr><th align='left'>VLM Variant</th><td>Strawberry</td></tr>
<tr><th align='left'>VLM Family</th><td>juice</td></tr>
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
  &quot;brand&quot;: &quot;Naturals&quot;,
  &quot;product_variant&quot;: &quot;Strawberry&quot;,
  &quot;product_family&quot;: &quot;juice&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;recyclable&quot;,
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;16 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;juice&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a close-up of a recyclable container with a strawberry label, indicating it is a juice product.&quot;
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
<tr><th align='left'>Display Name</th><td>cashew organic, dairy, 1828 ml bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>cashew</td></tr>
<tr><th align='left'>Product</th><td>cashew organic</td></tr>
<tr><th align='left'>Variant</th><td>organic</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>1828 ml bottle</td></tr>
<tr><th align='left'>Size</th><td>1828 ml</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>plastic</td></tr>
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
<tr><th align='left'>VLM Variant</th><td>organic</td></tr>
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
  &quot;product_variant&quot;: &quot;organic&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;28 FL OZ (1.75 PT) (828 mL)&quot;,
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;28 FL OZ (1.75 PT) (828 mL)&quot;,
  &quot;best_catalog_match&quot;: &quot;coffee creamer&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The product is labeled as &#x27;cashew Malk&#x27; which suggests it is a dairy-based beverage, likely a coffee creamer or similar dairy product.&quot;
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
<tr><th align='left'>Display Name</th><td>Lemon Cello, sparkling water, 0 can</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Lemon Cello</td></tr>
<tr><th align='left'>Product</th><td>Lemon Cello</td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td>sparkling water</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>0 can</td></tr>
<tr><th align='left'>Size</th><td>0</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>aluminum</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>warar t hoax s akling s ua s won natura essene cent 0 s d sonm s</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>0</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Lemon Cello</td></tr>
<tr><th align='left'>VLM Variant</th><td>Sparkling Water</td></tr>
<tr><th align='left'>VLM Family</th><td>sparkling water</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Lemon Cello</td></tr>
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
  &quot;brand&quot;: &quot;Lemon Cello&quot;,
  &quot;product_variant&quot;: &quot;Sparkling Water&quot;,
  &quot;product_family&quot;: &quot;sparkling water&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;aluminum&quot;,
  &quot;packaging_material&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;0&quot;,
  &quot;best_catalog_match&quot;: &quot;sparkling water&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The can is labeled as &#x27;Sparkling Water&#x27; and &#x27;Naturally Essenced&#x27;, indicating it is a sparkling water product.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;Lemon Cello&quot;,
  &quot;product_variant&quot;: &quot;Sparkling Water&quot;,
  &quot;product_family&quot;: &quot;sparkling water&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
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
<tr><th align='left'>Material (OpenFoodFacts)</th><td>aluminum</td></tr>
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
<tr><th align='left'>Resolver Brand</th><td></td></tr>
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
  &quot;container_spec&quot;: &quot;aluminum&quot;,
  &quot;packaging_material&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a metallic, cylindrical container with a pull-tab, which is characteristic of aluminum cans. The lack of visible branding or text makes it difficult to determine the specific product family or variant.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>Here&#x27;s the JSON output:

```
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: []
}
```

I&#x27;ve normalized the `brand` field based on the provided vision model output, but since there was no specific information about the brand from either OCR or vision outputs I left it empty.</pre>
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
<tr><th align='left'>Material (OpenFoodFacts)</th><td>plastic</td></tr>
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
<tr><th align='left'>Resolver Variant</th><td>French Vanilla</td></tr>
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
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;32 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;International Delight French Vanilla Coffee Creamer&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a green squeeze bottle with a yellow cap, which is typical for coffee creamers. The text &#x27;French Vanilla&#x27; is visible on the label, indicating the flavor. The size &#x27;32 fl oz&#x27; is also clearly marked.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;International Delight&quot;,
  &quot;product_variant&quot;: &quot;French Vanilla&quot;,
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
<tr><th align='left'>Material (OpenFoodFacts)</th><td>plastic</td></tr>
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
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a single, empty, transparent plastic clamshell container, likely used for food or other items.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>Here is the normalized JSON output:

```
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;clamshell&quot;,
  &quot;container_spec&quot;: &quot;single&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: []
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
<tr><th align='left'>Display Name</th><td>can</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>can</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>aluminum</td></tr>
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
  &quot;packaging_material&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a cylindrical container with a metallic top, suggesting it is a can. The yellow color and shape are consistent with a beverage can, but the lack of branding and specific product information makes it difficult to identify the exact product or family.&quot;
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
<tr><th align='left'>Display Name</th><td>Deer Park sparkling water, water, 16.9 fl oz bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Deer Park</td></tr>
<tr><th align='left'>Product</th><td>Deer Park sparkling water</td></tr>
<tr><th align='left'>Variant</th><td>sparkling water</td></tr>
<tr><th align='left'>Category</th><td>water</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>16.9 fl oz bottle</td></tr>
<tr><th align='left'>Size</th><td>16.9 fl oz</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>plastic</td></tr>
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
<tr><th align='left'>Resolver Variant</th><td></td></tr>
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
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;16.9 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;deer park sparkling water&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;shape&quot;],
  &quot;notes&quot;: &quot;The bottle is labeled with &#x27;deer park&#x27; and &#x27;sparkling water&#x27;, indicating it is a plastic bottle of sparkling water.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;Deer Park&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;water&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;16.9 fl oz&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}</pre>
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
<tr><th align='left'>Display Name</th><td>Mali Unsweetened, dairy, 28 FL OZ (1.75 PT) (828 ml) bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Mali</td></tr>
<tr><th align='left'>Product</th><td>Mali Unsweetened</td></tr>
<tr><th align='left'>Variant</th><td>Unsweetened</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>28 FL OZ (1.75 PT) (828 ml) bottle</td></tr>
<tr><th align='left'>Size</th><td>28 FL OZ (1.75 PT) (828 ml)</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>plastic</td></tr>
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
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Mali</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Unsweetened</td></tr>
<tr><th align='left'>Resolver Family</th><td>dairy</td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>{&#x27;type&#x27;: &#x27;OCR Text&#x27;, &#x27;value&#x27;: &#x27;iulers e s e s o s o e ingredients e s s eer park sa e c s&#x27;}</li>
<li>{&#x27;type&#x27;: &#x27;Vision Model Output&#x27;, &#x27;value&#x27;: &#x27;Mali&#x27;}</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Mali&quot;,
  &quot;product_variant&quot;: &quot;Unsweetened&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;28 FL OZ (1.75 PT) (828 ml)&quot;,
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;28 FL OZ (1.75 PT) (828 ml)&quot;,
  &quot;best_catalog_match&quot;: &quot;coffee creamer&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The product is labeled as &#x27;organic&#x27; and &#x27;unsweetened&#x27;, which aligns with the dairy category and coffee creamer subcategory.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;Mali&quot;,
  &quot;product_variant&quot;: &quot;Unsweetened&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;28 FL OZ (1.75 PT) (828 ml)&quot;,
  &quot;size_text&quot;: &quot;28 FL OZ (1.75 PT) (828 ml)&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: [
    {
      &quot;type&quot;: &quot;OCR Text&quot;,
      &quot;value&quot;: &quot;iulers e s e s o s o e ingredients e s s eer park sa e c s&quot;
    },
    {
      &quot;type&quot;: &quot;Vision Model Output&quot;,
      &quot;value&quot;: &quot;Mali&quot;
    }
  ]
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
<tr><th align='left'>Display Name</th><td>A&amp;W, can</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td>A&amp;W</td></tr>
<tr><th align='left'>Product</th><td>A&amp;W</td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>can</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>aluminium</td></tr>
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
<tr><th align='left'>Resolver Brand</th><td>A&amp;W</td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>No clear brand information from OCR text</li></ul>
      
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
  &quot;packaging_material&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a cylindrical container with a yellow label, which is characteristic of a can. The OCR text and barcode are not clear, and there are no visible brand or product family indicators.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>Here&#x27;s the normalized JSON object:

```
{
  &quot;brand&quot;: &quot;A&amp;W&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [
    &quot;No clear brand information from OCR text&quot;
  ]
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
<tr><th align='left'>Material (OpenFoodFacts)</th><td>plastic</td></tr>
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
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;16.9 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;Deer Park Spring Water&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The bottle is made of plastic and has a label indicating it is Deer Park Spring Water.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```
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
```</pre>
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
<tr><th align='left'>Material (OpenFoodFacts)</th><td>plastic</td></tr>
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
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      
      
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
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;28 FL OZ (1.75 PT) (828 mL)&quot;,
  &quot;best_catalog_match&quot;: &quot;coffee creamer&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The product is labeled as &#x27;organic&#x27; and &#x27;unsweetened&#x27;, which aligns with the dairy category and coffee creamer subcategory.&quot;
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

The brand &quot;Cashew&quot; was incorrectly identified as the product brand, but after careful consideration of the OCR text and raw vision model output, the actual brand is empty.

Reasoning:

- The OCR text does not provide any clear evidence of a well-known brand.
- The vision model output contains an incorrect brand name (&quot;Cashew&quot;) that does not match any known consumer-facing product brand.
- The notes from the vision model output mention that the product is labeled as &quot;organic&quot; and &quot;unsweetened&quot;, which aligns with the dairy category and coffee creamer subcategory, but this information was not used to identify the brand.
- A generic check for common consumer-facing brand names (e.g. &quot;Coca-Cola&quot;, &quot;Mountain Dew&quot;) did not reveal any matches in this case.

Thus, it is more accurate to set `brand` to an empty string (`&quot;&quot;`) as there is no reliable evidence to suggest a specific product brand.</pre>
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
<tr><th align='left'>Display Name</th><td>Downy Rinse &amp; Fresh, dish soap, 1L bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Downy</td></tr>
<tr><th align='left'>Product</th><td>Downy Rinse &amp; Fresh</td></tr>
<tr><th align='left'>Variant</th><td>Rinse &amp; Fresh</td></tr>
<tr><th align='left'>Category</th><td>dish soap</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>1L bottle</td></tr>
<tr><th align='left'>Size</th><td>1L</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>plastic</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>colzlloz sreoprrows sinaicteen nee s oy fl lmon wres ais cris wssnnp e sdom s tuinee enouia socsosnano aunoc saag moh o onisnes es snormon hsedeed 5 humoa basnid asn oiaave g asnid</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>1L</td></tr>
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
      <p><strong>Resolver reasons</strong></p><ul><li>{&#x27;value&#x27;: &#x27;Raw vision model output contains valid information.&#x27;}</li>
<li>{&#x27;value&#x27;: &#x27;Raw vision model output matches best catalog match.&#x27;}</li></ul>
      
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
  &quot;container_spec&quot;: &quot;squeezable&quot;,
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;1L&quot;,
  &quot;best_catalog_match&quot;: &quot;dish soap&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;product_family&quot;],
  &quot;notes&quot;: &quot;The label indicates it is a dish soap product.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```
{
  &quot;brand&quot;: &quot;Downy&quot;,
  &quot;product_variant&quot;: &quot;Rinse &amp; Fresh&quot;,
  &quot;product_family&quot;: &quot;dish soap&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;squeezable&quot;,
  &quot;size_text&quot;: &quot;1L&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: [
    {
      &quot;value&quot;: &quot;Raw vision model output contains valid information.&quot;
    },
    {
      &quot;value&quot;: &quot;Raw vision model output matches best catalog match.&quot;
    }
  ]
}
```

Explanation:

- `brand`: The raw vision model output contained the brand name, which was used as is.
- `product_variant` and `product_family`: Since both OCR text and raw vision model output contained this information, it was kept as-is. However, a sanity check would confirm that these values match and are not generic category words like yogurt or soda.
- `container_type` and `container_spec`: These were also taken directly from the raw vision model output.
- `size_text`: Taken directly from the raw vision model output.
- `confidence`: Set to 0.8, which is the confidence of the raw vision model output.
- `reasons`: A list of reasons why the values were chosen. This includes the fact that both OCR text and raw vision model output contained valid information and matched a best catalog match.</pre>
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
<tr><th align='left'>Display Name</th><td>Daisy Sour Cream, dairy, 3 lbs tub</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Daisy</td></tr>
<tr><th align='left'>Product</th><td>Daisy Sour Cream</td></tr>
<tr><th align='left'>Variant</th><td>Sour Cream</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>tub</td></tr>
<tr><th align='left'>Package</th><td>3 lbs tub</td></tr>
<tr><th align='left'>Size</th><td>3 lbs</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>cardboard, plastic, pp 5 polypropylene</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>daisy cree brand natud sour 6 azeal pure 3lbs</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>3 lbs</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Daisy</td></tr>
<tr><th align='left'>VLM Variant</th><td>Sour Cream</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>tub</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Daisy</td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
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
  &quot;container_spec&quot;: &quot;3 lbs&quot;,
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;3 lbs&quot;,
  &quot;best_catalog_match&quot;: &quot;tub&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;, &quot;shape&quot;],
  &quot;notes&quot;: &quot;The container is a tub used for storing sour cream, as indicated by the text on the label.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Daisy&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;3 lbs&quot;,
  &quot;size_text&quot;: &quot;3 lbs&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}
```

In this output, the `brand` has been normalized to a canonical consumer-facing name using OCR text and the raw vision model output. The product variant is left blank as it was not confidently extracted from the input data.

Note: To improve accuracy, you could consider using more advanced NLP techniques or machine learning models for handling noisy OCR outputs.</pre>
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
<tr><th align='left'>Display Name</th><td>square</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>tub</td></tr>
<tr><th align='left'>Package</th><td>square</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>plastic</td></tr>
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
<tr><th align='left'>Resolver Container</th><td>tub</td></tr>
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
  &quot;container_spec&quot;: &quot;square&quot;,
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a square-shaped tub, likely made of plastic, with a smooth surface and no visible branding or text.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>Here is the normalized JSON output:

```
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;square&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: []
}
```

Reasoning:

1. The brand was not recognizable from the OCR text or vision model output, so it&#x27;s set to an empty string.
2. The product variant and family were also not recognizable, so they&#x27;re set to empty strings as well.
3. The container type is determined by the raw vision model output to be a &quot;tub&quot;, which matches the provided schema.
4. The container spec is also determined from the raw vision model output to be a &quot;square&quot; shape.
5. Since the product variant and family were not recognizable, and the best catalog match was not available (i.e., it&#x27;s set to an empty string), the confidence level remains 0.0.
6. There are no reasons provided in this case, so an empty array is used instead of attempting to infer or hallucinate details.

Note that this output assumes a conservative approach, prioritizing the reliability of the raw vision model over potential inaccuracies in the OCR text.</pre>
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
<tr><th align='left'>Display Name</th><td>Nature&#x27;s Promise Spring Water, water, 0 can</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Nature&#x27;s Promise</td></tr>
<tr><th align='left'>Product</th><td>Nature&#x27;s Promise Spring Water</td></tr>
<tr><th align='left'>Variant</th><td>Spring Water</td></tr>
<tr><th align='left'>Category</th><td>water</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>0 can</td></tr>
<tr><th align='left'>Size</th><td>0</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>aluminum</td></tr>
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
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Nature&#x27;s Promise</td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
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
  &quot;container_spec&quot;: &quot;aluminum&quot;,
  &quot;packaging_material&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;0&quot;,
  &quot;best_catalog_match&quot;: &quot;aluminum can&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a can with a green and white label, indicating it is a beverage product. The OCR text and logo suggest it is a spring water product.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```
{
  &quot;brand&quot;: &quot;Nature&#x27;s Promise&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;water&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;0&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}
```</pre>
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
<tr><th align='left'>Display Name</th><td>Downy Deep Clean &amp; Refresh, fabric softener, 1.5L bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Downy</td></tr>
<tr><th align='left'>Product</th><td>Downy Deep Clean &amp; Refresh</td></tr>
<tr><th align='left'>Variant</th><td>Deep Clean &amp; Refresh</td></tr>
<tr><th align='left'>Category</th><td>fabric softener</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>1.5L bottle</td></tr>
<tr><th align='left'>Size</th><td>1.5L</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>plastic</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>oe m eronous unsiosed snonimon f unsinss s ts suneo oines dbo moh onisnvs s o wous se hsedeed ssnolmoh ol usdae sauns humoa sesnid asn usnos elnev snousysuimg spson punos sope nodpus s isnia dne</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>1.5L</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Downy</td></tr>
<tr><th align='left'>VLM Variant</th><td>Deep Clean &amp; Refresh</td></tr>
<tr><th align='left'>VLM Family</th><td>fabric softener</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Downy</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Deep Clean &amp; Refresh</td></tr>
<tr><th align='left'>Resolver Family</th><td>fabric softener</td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Downy&quot;,
  &quot;product_variant&quot;: &quot;Deep Clean &amp; Refresh&quot;,
  &quot;product_family&quot;: &quot;fabric softener&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;squeezable&quot;,
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;1.5L&quot;,
  &quot;best_catalog_match&quot;: &quot;Downy Deep Clean &amp; Refresh Fabric Rinse&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;product_family&quot;, &quot;container_type&quot;],
  &quot;notes&quot;: &quot;The image shows a bottle of Downy fabric softener with a label indicating it is a fabric rinse product.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;Downy&quot;,
  &quot;product_variant&quot;: &quot;Deep Clean &amp; Refresh&quot;,
  &quot;product_family&quot;: &quot;fabric softener&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;squeezable&quot;,
  &quot;size_text&quot;: &quot;1.5L&quot;,
  &quot;confidence&quot;: 0.9,
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
<tr><th align='left'>Material (OpenFoodFacts)</th><td>cardboard, plastic, pp 5 polypropylene</td></tr>
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
<tr><th align='left'>Resolver Brand</th><td>Daisy Sour Cream</td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
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
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;3 lbs (1.36kg)&quot;,
  &quot;best_catalog_match&quot;: &quot;sour cream&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The container is a tub of sour cream, as indicated by the text on the label.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{&quot;brand&quot;: &quot;Daisy Sour Cream&quot;, &quot;product_variant&quot;: &quot;&quot;, &quot;product_family&quot;: &quot;dairy&quot;, &quot;container_type&quot;: &quot;tub&quot;, &quot;container_spec&quot;: &quot;3 lbs (1.36kg)&quot;, &quot;size_text&quot;: &quot;3 lbs (1.36kg)&quot;, &quot;confidence&quot;: 0.9, &quot;reasons&quot;: []}</pre>
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
<tr><th align='left'>Material (OpenFoodFacts)</th><td>plastic</td></tr>
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
<tr><th align='left'>Resolver Brand</th><td>Acti</td></tr>
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
  &quot;brand&quot;: &quot;Acti&quot;,
  &quot;product_variant&quot;: &quot;Strawberry&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;jug&quot;,
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;1.5 L&quot;,
  &quot;best_catalog_match&quot;: &quot;yogurt&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a jug of Acti yogurt with a strawberry flavor, as indicated by the text and imagery on the label.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;Acti&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
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
<tr><th align='left'>Material (OpenFoodFacts)</th><td>aluminum</td></tr>
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
  &quot;brand&quot;: &quot;Nature&#x27;s Promise&quot;,
  &quot;product_variant&quot;: &quot;Spring Water&quot;,
  &quot;product_family&quot;: &quot;water&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;12 FL OZ (355ml)&quot;,
  &quot;packaging_material&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;12 FL OZ (355ml)&quot;,
  &quot;best_catalog_match&quot;: &quot;sparkling water&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The can is labeled as &#x27;Spring Water&#x27; and has a green and white color scheme, which is typical for water products.&quot;
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
<tr><th align='left'>Material (OpenFoodFacts)</th><td>aluminum</td></tr>
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
  &quot;brand&quot;: &quot;Limoncello&quot;,
  &quot;product_variant&quot;: &quot;Sparkling Water&quot;,
  &quot;product_family&quot;: &quot;sparkling water&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;aluminum&quot;,
  &quot;packaging_material&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;0 CALOR&quot;,
  &quot;best_catalog_match&quot;: &quot;sparkling water&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The can is labeled as &#x27;Sparkling Water&#x27; and &#x27;Naturally Essenced&#x27;, indicating it is a flavored sparkling water product.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;Limoncello&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;sparkling water&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;0 CALOR&quot;,
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
<tr><th align='left'>Display Name</th><td>round</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>round</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>plastic</td></tr>
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
  &quot;container_spec&quot;: &quot;round&quot;,
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a circular, flat, and smooth surface which is typical of a plastic bottle cap or a lid.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>Here&#x27;s the JSON output for the given schema:

```
{
    &quot;brand&quot;: &quot;&quot;,
    &quot;product_variant&quot;: &quot;&quot;,
    &quot;product_family&quot;: &quot;&quot;,
    &quot;container_type&quot;: &quot;bottle&quot;,
    &quot;container_spec&quot;: &quot;round&quot;,
    &quot;size_text&quot;: &quot;&quot;,
    &quot;confidence&quot;: 0.0,
    &quot;reasons&quot;: []
}
```

This output is derived from the provided rules:

- Since there are no OCR texts to normalize, we default to empty brand.
- We set `brand` to an empty string as the best catalog match in the raw vision model output does not contain any recognizable brand name.
- The other fields in the output remain unchanged based on the vision model&#x27;s raw data.

The brand normalization rules could be incorporated by adding additional logic that maps the generic categories and normalizes them for better consumer experience.</pre>
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
<tr><th align='left'>Display Name</th><td>Daisy 2% Milkfat, dairy, 13g protein tub</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Daisy</td></tr>
<tr><th align='left'>Product</th><td>Daisy 2% Milkfat</td></tr>
<tr><th align='left'>Variant</th><td>2% Milkfat</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>tub</td></tr>
<tr><th align='left'>Package</th><td>13g protein tub</td></tr>
<tr><th align='left'>Size</th><td>13g protein</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>cardboard, plastic, pp 5 polypropylene</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>daisy cottag brand chees esactivecoa s withlive s s od milkfat lvi mo1 s s c s proiein</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>13g protein</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Daisy</td></tr>
<tr><th align='left'>VLM Variant</th><td>2% Milkfat</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>tub</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Daisy</td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
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
  &quot;container_spec&quot;: &quot;small curd&quot;,
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;13g protein&quot;,
  &quot;best_catalog_match&quot;: &quot;cottage cheese&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The container is a tub of low-fat cottage cheese with small curd and 13g of protein per serving.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```
{
  &quot;brand&quot;: &quot;Daisy&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;small curd&quot;,
  &quot;size_text&quot;: &quot;13g protein&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}
```</pre>
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
<tr><th align='left'>Display Name</th><td>A&amp;F Low Fat, dairy, 1L jug</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>A&amp;F</td></tr>
<tr><th align='left'>Product</th><td>A&amp;F Low Fat</td></tr>
<tr><th align='left'>Variant</th><td>Low Fat</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>jug</td></tr>
<tr><th align='left'>Package</th><td>1L jug</td></tr>
<tr><th align='left'>Size</th><td>1L</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>plastic</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>ers d oun 9 sis</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>1L</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>A&amp;F</td></tr>
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
  &quot;brand&quot;: &quot;A&amp;F&quot;,
  &quot;product_variant&quot;: &quot;Low Fat&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;jug&quot;,
  &quot;container_spec&quot;: &quot;1L&quot;,
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;1L&quot;,
  &quot;best_catalog_match&quot;: &quot;yogurt&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a jug with a label indicating it is a dairy product, likely yogurt, given the branding and the shape of the container.&quot;
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
<tr><th align='left'>Material (OpenFoodFacts)</th><td>pet 1 polyethylene terephthalate</td></tr>
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
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;200&quot;,
  &quot;best_catalog_match&quot;: &quot;Coca-Cola bottle&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a plastic bottle with a red label and the Coca-Cola logo, indicating it is a soda bottle.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;Original Taste&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;200&quot;,
  &quot;confidence&quot;: 0.9,
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
<tr><th align='left'>Display Name</th><td>Dals 2% Milk Fat, dairy, 13g Protein tub</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Dals</td></tr>
<tr><th align='left'>Product</th><td>Dals 2% Milk Fat</td></tr>
<tr><th align='left'>Variant</th><td>2% Milk Fat</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>tub</td></tr>
<tr><th align='left'>Package</th><td>13g Protein tub</td></tr>
<tr><th align='left'>Size</th><td>13g Protein</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>cardboard, plastic, pp 5 polypropylene</td></tr>
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
<tr><th align='left'>VLM Container</th><td>tub</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td>2% Milk Fat</td></tr>
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
  &quot;brand&quot;: &quot;Dals&quot;,
  &quot;product_variant&quot;: &quot;2% Milk Fat&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;small curd&quot;,
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;13g Protein&quot;,
  &quot;best_catalog_match&quot;: &quot;cottage cheese&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The container is a tub of cottage cheese with a focus on low fat content and small curd texture.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;2% Milk Fat&quot;,
  &quot;product_family&quot;: &quot;Dairy&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;small curd&quot;,
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
<tr><th align='left'>Material (OpenFoodFacts)</th><td>plastic</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>s s taste shing resse sginal s dus rss</td></tr>
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
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;200&quot;,
  &quot;best_catalog_match&quot;: &quot;Coca-Cola 200ml bottle&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a plastic bottle with a red label and the Coca-Cola logo, indicating it is a 200ml bottle of Coca-Cola Original Taste.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;Original Taste&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;200&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}</pre>
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
<tr><th align='left'>Material (OpenFoodFacts)</th><td>plastic</td></tr>
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
<tr><th align='left'>Resolver Variant</th><td>20 fl oz</td></tr>
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
  &quot;product_variant&quot;: &quot;20 fl oz&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;20 fl oz&quot;,
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;20 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;Coca-Cola&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a plastic bottle with a red cap and a label indicating it is a 20 fl oz bottle of Coca-Cola.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```
{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;20 fl oz&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;20 fl oz&quot;,
  &quot;size_text&quot;: &quot;20 fl oz&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}
```</pre>
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
<tr><th align='left'>Display Name</th><td>Mountain Dew, single use</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td>Mountain Dew</td></tr>
<tr><th align='left'>Product</th><td>Mountain Dew</td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>cup</td></tr>
<tr><th align='left'>Package</th><td>single use</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>plastic</td></tr>
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
<tr><th align='left'>Resolver Brand</th><td>Mountain Dew</td></tr>
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
  &quot;container_spec&quot;: &quot;single use&quot;,
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a single-use plastic cup, likely used for beverages, with a lid. The OCR text &#x27;ss&#x27; and the barcode are not present, and there are no visible brand or product details.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>Here is the JSON output after normalizing noisy OCR and vision outputs:

```
{
  &quot;brand&quot;: &quot;Mountain Dew&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;cup&quot;,
  &quot;container_spec&quot;: &quot;single use&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: []
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
<tr><th align='left'>Display Name</th><td>Coca-Cola Recycle Me, soda, 500ml bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Product</th><td>Coca-Cola Recycle Me</td></tr>
<tr><th align='left'>Variant</th><td>Recycle Me</td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>500ml bottle</td></tr>
<tr><th align='left'>Size</th><td>500ml</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>plastic</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>s d laia lisde recycle mie seerouagainsoo s s s 5 d</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>500ml</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>VLM Variant</th><td>Recycle Me</td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Recycle Me</td></tr>
<tr><th align='left'>Resolver Family</th><td>soda</td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>{&#x27;value&#x27;: &#x27;logo&#x27;}</li>
<li>{&#x27;value&#x27;: &#x27;ocr&#x27;}</li></ul>
      
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
  &quot;container_spec&quot;: &quot;500ml&quot;,
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;500ml&quot;,
  &quot;best_catalog_match&quot;: &quot;Coca-Cola bottle&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The bottle has a &#x27;Recycle Me&#x27; label, indicating it is designed for recycling.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```
{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;Recycle Me&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;500ml&quot;,
  &quot;size_text&quot;: &quot;500ml&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: [
    {
      &quot;value&quot;: &quot;logo&quot;
    },
    {
      &quot;value&quot;: &quot;ocr&quot;
    }
  ]
}
```</pre>
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
<tr><th align='left'>Display Name</th><td>Coca-Cola, soda, 500ml bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Product</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>500ml bottle</td></tr>
<tr><th align='left'>Size</th><td>500ml</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>plastic</td></tr>
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
<tr><th align='left'>VLM Variant</th><td>0</td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
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
  &quot;product_variant&quot;: &quot;0&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;500ml&quot;,
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;500ml&quot;,
  &quot;best_catalog_match&quot;: &quot;Coca-Cola&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a Coca-Cola bottle with a &#x27;Recycle Me&#x27; label, indicating it is a plastic bottle.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;500ml&quot;,
  &quot;size_text&quot;: &quot;500ml&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}
```</pre>
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
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Product</th><td>Coca-Cola Regular</td></tr>
<tr><th align='left'>Variant</th><td>Regular</td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>20 fl oz bottle</td></tr>
<tr><th align='left'>Size</th><td>20 fl oz</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>plastic</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>e s s ls oozsatoie e s soou ntage auhedtcally sa ispineg o l be</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>20 fl oz</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>VLM Variant</th><td>Regular</td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Regular</td></tr>
<tr><th align='left'>Resolver Family</th><td>soda</td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>{&#x27;value&#x27;: &#x27;OCR text match&#x27;}</li>
<li>{&#x27;value&#x27;: &#x27;Raw vision model output match&#x27;}</li></ul>
      
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
  &quot;container_spec&quot;: &quot;clear plastic bottle with red label&quot;,
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;20 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;Coca-Cola Regular Bottle&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a clear plastic bottle with a red label, which is characteristic of Coca-Cola bottles. The OCR text on the label confirms the brand and product variant.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;Regular&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;clear plastic bottle with red label&quot;,
  &quot;size_text&quot;: &quot;20 fl oz&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: [
    {
      &quot;value&quot;: &quot;OCR text match&quot;
    },
    {
      &quot;value&quot;: &quot;Raw vision model output match&quot;
    }
  ]
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
<tr><th align='left'>Display Name</th><td>Diet Coke 0 calories, soda, 12 FL OZ (355 mL) can</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Diet Coke</td></tr>
<tr><th align='left'>Product</th><td>Diet Coke 0 calories</td></tr>
<tr><th align='left'>Variant</th><td>0 calories</td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>12 FL OZ (355 mL) can</td></tr>
<tr><th align='left'>Size</th><td>12 FL OZ (355 mL)</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>aluminum</td></tr>
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
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Diet Coke</td></tr>
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
  &quot;brand&quot;: &quot;Diet Coke&quot;,
  &quot;product_variant&quot;: &quot;0 calories&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;12 fl oz&quot;,
  &quot;packaging_material&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;12 FL OZ (355 mL)&quot;,
  &quot;best_catalog_match&quot;: &quot;Diet Coke can&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The can is silver with red lettering, which is characteristic of Diet Coke branding.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;Diet Coke&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;12 fl oz&quot;,
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
<tr><th align='left'>Display Name</th><td>Coca-Cola, soda, 200 bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Product</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>200 bottle</td></tr>
<tr><th align='left'>Size</th><td>200</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>plastic</td></tr>
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
  &quot;container_spec&quot;: &quot;200ml&quot;,
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;200&quot;,
  &quot;best_catalog_match&quot;: &quot;soda&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a plastic bottle with a red label, which is characteristic of Coca-Cola products.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```
{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;200&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;200ml&quot;,
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
<tr><th align='left'>Display Name</th><td>merve original, dairy, 16 fl oz (1 pint) 473ml bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>merve</td></tr>
<tr><th align='left'>Product</th><td>merve original</td></tr>
<tr><th align='left'>Variant</th><td>original</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>16 fl oz (1 pint) 473ml bottle</td></tr>
<tr><th align='left'>Size</th><td>16 fl oz (1 pint) 473ml</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>plastic</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>merve yogurtdrink ayran original 1610z slas e pint s</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>16 fl oz (1 pint) 473ml</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>merve</td></tr>
<tr><th align='left'>VLM Variant</th><td>original</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>A&amp;W</td></tr>
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
  &quot;brand&quot;: &quot;merve&quot;,
  &quot;product_variant&quot;: &quot;original&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;16 fl oz&quot;,
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;16 fl oz (1 pint) 473ml&quot;,
  &quot;best_catalog_match&quot;: &quot;yogurt drink&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The container is a plastic bottle with a red cap, labeled as a yogurt drink.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;A&amp;W&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: []
}
```

This output has been normalized according to the provided rules:

- The brand was not recognized as a canonical name, so it was set to an empty string.
- If a generic category word like &quot;yogurt&quot;, &quot;soda&quot;, etc., was detected in the OCR text or raw vision model output, the brand was set to an empty string.
- Since no barcode information was provided, the `brand` field is empty.
- The original values from the OCR and raw vision model output have been removed.
- The `confidence` value has been reduced to 0.0 as per the rule that prefer empty over hallucinated details.
- No `reasons` are listed as there is no need for them in this case.</pre>
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
<tr><th align='left'>Material (OpenFoodFacts)</th><td>plastic</td></tr>
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
<tr><th align='left'>Resolver Variant</th><td>Whole Milk Greek Yogurt</td></tr>
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
  &quot;container_spec&quot;: &quot;single&quot;,
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;16 oz&quot;,
  &quot;best_catalog_match&quot;: &quot;yogurt&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a close-up of a Chobani yogurt container with text indicating it is a whole milk Greek yogurt. The OCR text includes part of the product name and size, which supports the identification.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;Chobani&quot;,
  &quot;product_variant&quot;: &quot;Whole Milk Greek Yogurt&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;single&quot;,
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
<tr><th align='left'>Material (OpenFoodFacts)</th><td>plastic</td></tr>
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
  &quot;brand&quot;: &quot;Gatorade&quot;,
  &quot;product_variant&quot;: &quot;Zero&quot;,
  &quot;product_family&quot;: &quot;sports drink&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;20 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;sports drink&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a plastic bottle with a label indicating it is a Gatorade Zero sports drink.&quot;
}
```</pre>
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
<tr><th align='left'>Display Name</th><td>Bio-K Bio-K Plus Extra, dairy, 5g bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Bio-K</td></tr>
<tr><th align='left'>Product</th><td>Bio-K Bio-K Plus Extra</td></tr>
<tr><th align='left'>Variant</th><td>Bio-K Plus Extra</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>5g bottle</td></tr>
<tr><th align='left'>Size</th><td>5g</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>plastic</td></tr>
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
  &quot;brand&quot;: &quot;Bio-K&quot;,
  &quot;product_variant&quot;: &quot;Bio-K Plus Extra&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;5g&quot;,
  &quot;best_catalog_match&quot;: &quot;yogurt&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;barcode&quot;, &quot;text&quot;],
  &quot;notes&quot;: &quot;The container appears to be a small plastic bottle, commonly used for yogurt or similar dairy products. The text and barcode suggest it is a product from the Bio-K brand, which is known for probiotic products. The size text &#x27;5g&#x27; indicates a small quantity, which is typical for probiotic supplements or small portions of yogurt.&quot;
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
<tr><th align='left'>Material (OpenFoodFacts)</th><td>plastic</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>e s estrog ee cous srel oo0 amu mo7 te snintla oa lv ol tun tiis</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>1 gallon</td></tr>
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
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;1 gallon&quot;,
  &quot;best_catalog_match&quot;: &quot;milk&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;shape&quot;],
  &quot;notes&quot;: &quot;The container is designed for milk, indicated by the &#x27;Low Fat&#x27; label and the shape of the jug.&quot;
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
  &quot;packaging_material&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;Coca-Cola can&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a close-up of a Coca-Cola can with a pull-tab, indicating it is a beverage can.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>Here&#x27;s the JSON output after normalization:

```
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
<tr><th align='left'>Confidence</th><td>0.95</td></tr>
<tr><th align='left'>Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Product</th><td>Coca-Cola Original</td></tr>
<tr><th align='left'>Variant</th><td>Original</td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>500ml bottle</td></tr>
<tr><th align='left'>Size</th><td>500ml</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>plastic</td></tr>
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
<tr><th align='left'>VLM Confidence</th><td>0.95</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Original</td></tr>
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
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;Original&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;500ml&quot;,
  &quot;best_catalog_match&quot;: &quot;500ml plastic bottle&quot;,
  &quot;confidence&quot;: 0.95,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The bottle is a clear plastic bottle with a red label featuring the Coca-Cola logo and the text &#x27;Original&#x27; and &#x27;Delicious &amp; Refreshing&#x27;. The bottle appears to be a standard 500ml size.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;Original&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;500ml&quot;,
  &quot;confidence&quot;: 0.95,
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
<tr><th align='left'>Display Name</th><td>Coca-Cola Zero, soda, 12 fl oz (355 ml) can</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Product</th><td>Coca-Cola Zero</td></tr>
<tr><th align='left'>Variant</th><td>Zero</td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>12 fl oz (355 ml) can</td></tr>
<tr><th align='left'>Size</th><td>12 fl oz (355 ml)</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>aluminum</td></tr>
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
<tr><th align='left'>Resolver Brand</th><td>Coca-Cola Zero</td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td>soda</td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>{&#x27;key&#x27;: &#x27;OCR&#x27;, &#x27;value&#x27;: &#x27;ougen z012 obl w cai&#x27;}</li>
<li>{&#x27;key&#x27;: &#x27;Vision&#x27;, &#x27;value&#x27;: &quot;The can is red with the iconic Coca-Cola logo and the text &#x27;Recycle Me&#x27; indicating it is recyclable. The size is clearly marked as 12 fl oz (355 ml).&quot;}</li></ul>
      
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
  &quot;packaging_material&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;12 fl oz (355 ml)&quot;,
  &quot;best_catalog_match&quot;: &quot;Coca-Cola Zero&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The can is red with the iconic Coca-Cola logo and the text &#x27;Recycle Me&#x27; indicating it is recyclable. The size is clearly marked as 12 fl oz (355 ml).&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;Coca-Cola Zero&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;12 fl oz (355 ml)&quot;,
  &quot;size_text&quot;: &quot;12 fl oz (355 ml)&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: [
    {
      &quot;key&quot;: &quot;OCR&quot;,
      &quot;value&quot;: &quot;ougen z012 obl w cai&quot;
    },
    {
      &quot;key&quot;: &quot;Vision&quot;,
      &quot;value&quot;: &quot;The can is red with the iconic Coca-Cola logo and the text &#x27;Recycle Me&#x27; indicating it is recyclable. The size is clearly marked as 12 fl oz (355 ml).&quot;
    }
  ]
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
<tr><th align='left'>Material (OpenFoodFacts)</th><td>metal</td></tr>
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
  &quot;packaging_material&quot;: &quot;aluminum&quot;,
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
  &quot;reasons&quot;: []
}
```

Explanation:

- The brand was extracted from the raw vision model output and is confirmed by the OCR text. 
- Since the product variant, container spec, size text, packaging material are not provided in either OCR text or raw vision model output, they have been set to empty.
- `confidence` is 0.9 as per the raw vision model output.
- No generic category words like &quot;yogurt&quot;, &quot;soda&quot;, etc., and no container-related terms have been added as brand name as it is already extracted from the model output with high confidence.</pre>
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
<tr><th align='left'>Material (OpenFoodFacts)</th><td>hdpe 2 high density polyethylene, pet 1 polyethylene terephthalate, pp 5 polypropylene</td></tr>
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
      <p><strong>Resolver reasons</strong></p><ul><li>{&#x27;type&#x27;: &#x27;vision_model_output&#x27;, &#x27;value&#x27;: &#x27;```json\n{\n  &quot;brand&quot;: &quot;Coke&quot;,\n  &quot;product_variant&quot;: &quot;&quot;,\n  &quot;product_family&quot;: &quot;soda&quot;,\n  &quot;container_type&quot;: &quot;can&quot;,\n  &quot;container_spec&quot;: &quot;&quot;,\n  &quot;packaging_material&quot;: &quot;aluminum&quot;,\n  &quot;size_text&quot;: &quot;&quot;,\n  &quot;best_catalog_match&quot;: &quot;Coca-Cola can&quot;,\n  &quot;confidence&quot;: 0.9,\n  &quot;evidence&quot;: [&quot;logo&quot;, &quot;shape&quot;],\n  &quot;notes&quot;: &quot;The image shows a red can with the \&#x27;Coke\&#x27; logo, indicating it is a Coca-Cola product.&quot;\n}\n```&#x27;}</li></ul>
      
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
  &quot;packaging_material&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;Coca-Cola can&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a red can with the &#x27;Coke&#x27; logo, indicating it is a Coca-Cola product.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>Here&#x27;s the JSON output based on the provided OCR text and raw vision model output:

```
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
      &quot;type&quot;: &quot;vision_model_output&quot;,
      &quot;value&quot;: &quot;```json\n{\n  \&quot;brand\&quot;: \&quot;Coke\&quot;,\n  \&quot;product_variant\&quot;: \&quot;\&quot;,\n  \&quot;product_family\&quot;: \&quot;soda\&quot;,\n  \&quot;container_type\&quot;: \&quot;can\&quot;,\n  \&quot;container_spec\&quot;: \&quot;\&quot;,\n  \&quot;packaging_material\&quot;: \&quot;aluminum\&quot;,\n  \&quot;size_text\&quot;: \&quot;\&quot;,\n  \&quot;best_catalog_match\&quot;: \&quot;Coca-Cola can\&quot;,\n  \&quot;confidence\&quot;: 0.9,\n  \&quot;evidence\&quot;: [\&quot;logo\&quot;, \&quot;shape\&quot;],\n  \&quot;notes\&quot;: \&quot;The image shows a red can with the &#x27;Coke&#x27; logo, indicating it is a Coca-Cola product.\&quot;\n}\n```&quot;
    }
  ]
}
```

In this output:

- The `brand` field has been normalized to &quot;Coca-Cola&quot; based on the raw vision model output.
- The `product_variant` and `size_text` fields are empty as there is no information available in the OCR text or raw vision model output.
- The `confidence` field reflects the confidence score from the raw vision model output, which is 0.9.
- A single reason is provided with a type of &quot;vision_model_output&quot; to indicate that the brand was extracted from the raw vision model output.
- All other fields are empty as there is no relevant information available in the OCR text or raw vision model output.</pre>
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
<tr><th align='left'>Material (OpenFoodFacts)</th><td>aluminum</td></tr>
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
  &quot;container_spec&quot;: &quot;1 Can&quot;,
  &quot;packaging_material&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;1 Can&quot;,
  &quot;best_catalog_match&quot;: &quot;soda&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a red can with a Coca-Cola logo and nutritional facts label, indicating it is a soda product.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{&quot;brand&quot;: &quot;Coca-Cola&quot;, &quot;product_variant&quot;: &quot;1 Can&quot;, &quot;product_family&quot;: &quot;soda&quot;, &quot;container_type&quot;: &quot;can&quot;, &quot;container_spec&quot;: &quot;1 Can&quot;, &quot;size_text&quot;: &quot;1 Can&quot;, &quot;confidence&quot;: 0.9, &quot;reasons&quot;: []}</pre>
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
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Siggi&#x27;s</td></tr>
<tr><th align='left'>Product</th><td>Siggi&#x27;s Whole Milk Plain</td></tr>
<tr><th align='left'>Variant</th><td>Whole Milk Plain</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>tub</td></tr>
<tr><th align='left'>Package</th><td>32 oz (907g) tub</td></tr>
<tr><th align='left'>Size</th><td>32 oz (907g)</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>cardboard, plastic, pp 5 polypropylene</td></tr>
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
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Siggi&#x27;s</td></tr>
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
  &quot;brand&quot;: &quot;Siggi&#x27;s&quot;,
  &quot;product_variant&quot;: &quot;Whole Milk Plain&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;32 oz (907g)&quot;,
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;32 oz (907g)&quot;,
  &quot;best_catalog_match&quot;: &quot;yogurt&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a container with text indicating it is a yogurt product, specifically whole milk plain Greek strained yogurt. The container is labeled with the brand name &#x27;Siggi&#x27;s&#x27; and specifies the product as &#x27;All Natural Whole Milk (5%) Greek Strained Yogurt&#x27;. The size is clearly marked as 32 oz (907g).&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;Siggi&#x27;s&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
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
<tr><th align='left'>Material (OpenFoodFacts)</th><td>hdpe 2 high density polyethylene, pet 1 polyethylene terephthalate, pp 5 polypropylene</td></tr>
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
  &quot;packaging_material&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;Coca-Cola can&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a close-up of a Coca-Cola can with a pull-tab, indicating it is a beverage can.&quot;
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
<tr><th align='left'>Display Name</th><td>Siggis Greek Strained, dairy, 32 oz (907g) tub</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Siggis</td></tr>
<tr><th align='left'>Product</th><td>Siggis Greek Strained</td></tr>
<tr><th align='left'>Variant</th><td>Greek Strained</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>tub</td></tr>
<tr><th align='left'>Package</th><td>32 oz (907g) tub</td></tr>
<tr><th align='left'>Size</th><td>32 oz (907g)</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>cardboard, plastic, pp 5 polypropylene</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>1e i s uple inrees s s s s 15 s e s s s s s s s preseniis protenerich s glutenaliee s e s vogcarad s s s daltine togune s s s s s 8 a 0 3 wolrit ilat cued</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>32 oz (907g)</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Siggis</td></tr>
<tr><th align='left'>VLM Variant</th><td>Greek Strained</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>tub</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Siggis</td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td>dairy</td></tr>
<tr><th align='left'>Resolver Container</th><td>tub</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>{&#x27;type&#x27;: &#x27;OCR Text&#x27;, &#x27;text&#x27;: &#x27;1e i s uple inrees s s s s 15 s e s s s s s s preseniis protenerich s glutenaliee s e s vogcarad s s s daltine togune s s s s s 8 a 0 3 wolrit ilat cued&#x27;}</li>
<li>{&#x27;type&#x27;: &#x27;Raw Vision Model Output&#x27;, &#x27;text&#x27;: &#x27;{\n  &quot;brand&quot;: &quot;Siggis&quot;,\n  &quot;product_variant&quot;: &quot;Greek Strained&quot;,\n  &quot;product_family&quot;: &quot;dairy&quot;,\n  &quot;container_type&quot;: &quot;tub&quot;,\n  &quot;container_spec&quot;: &quot;32 oz (907g)&quot;,\n  &quot;packaging_material&quot;: &quot;plastic&quot;,\n  &quot;size_text&quot;: &quot;32 oz (907g)&quot;,\n  &quot;best_catalog_match&quot;: &quot;yogurt&quot;,\n  &quot;confidence&quot;: 0.8,\n  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],\n  &quot;notes&quot;: &quot;The container is a tub of Greek yogurt, as indicated by the text on the label.&quot;}&#x27;}</li></ul>
      
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
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;32 oz (907g)&quot;,
  &quot;best_catalog_match&quot;: &quot;yogurt&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The container is a tub of Greek yogurt, as indicated by the text on the label.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;Siggis&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;32 oz (907g)&quot;,
  &quot;size_text&quot;: &quot;32 oz (907g)&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: [
    {
      &quot;type&quot;: &quot;OCR Text&quot;,
      &quot;text&quot;: &quot;1e i s uple inrees s s s s 15 s e s s s s s s preseniis protenerich s glutenaliee s e s vogcarad s s s daltine togune s s s s s 8 a 0 3 wolrit ilat cued&quot;
    },
    {
      &quot;type&quot;: &quot;Raw Vision Model Output&quot;,
      &quot;text&quot;: &quot;{\n  \&quot;brand\&quot;: \&quot;Siggis\&quot;,\n  \&quot;product_variant\&quot;: \&quot;Greek Strained\&quot;,\n  \&quot;product_family\&quot;: \&quot;dairy\&quot;,\n  \&quot;container_type\&quot;: \&quot;tub\&quot;,\n  \&quot;container_spec\&quot;: \&quot;32 oz (907g)\&quot;,\n  \&quot;packaging_material\&quot;: \&quot;plastic\&quot;,\n  \&quot;size_text\&quot;: \&quot;32 oz (907g)\&quot;,\n  \&quot;best_catalog_match\&quot;: \&quot;yogurt\&quot;,\n  \&quot;confidence\&quot;: 0.8,\n  \&quot;evidence\&quot;: [\&quot;logo\&quot;, \&quot;ocr\&quot;],\n  \&quot;notes\&quot;: \&quot;The container is a tub of Greek yogurt, as indicated by the text on the label.\&quot;}&quot;
    }
  ]
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
<tr><th align='left'>Display Name</th><td>Sanpellegrino Ciao! Blood Orange, juice, 11.15 fl oz can</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Sanpellegrino</td></tr>
<tr><th align='left'>Product</th><td>Sanpellegrino Ciao! Blood Orange</td></tr>
<tr><th align='left'>Variant</th><td>Ciao! Blood Orange</td></tr>
<tr><th align='left'>Category</th><td>juice</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>11.15 fl oz can</td></tr>
<tr><th align='left'>Size</th><td>11.15 fl oz</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>aluminium</td></tr>
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
  &quot;container_spec&quot;: &quot;aluminum&quot;,
  &quot;packaging_material&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;11.15 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;Sanpellegrino Ciao! Blood Orange&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;, &quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a can with a label that includes the brand name &#x27;Sanpellegrino&#x27; and the product name &#x27;Ciao! Blood Orange&#x27;. The barcode and OCR text confirm the product details and size.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;Sanpellegrino&quot;,
  &quot;product_variant&quot;: &quot;Ciao! Blood Orange&quot;,
  &quot;product_family&quot;: &quot;juice&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;11.15 fl oz&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
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
<tr><th align='left'>Display Name</th><td>Sanremo Rino, juice, Blu can</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Sanremo</td></tr>
<tr><th align='left'>Product</th><td>Sanremo Rino</td></tr>
<tr><th align='left'>Variant</th><td>Rino</td></tr>
<tr><th align='left'>Category</th><td>juice</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>Blu can</td></tr>
<tr><th align='left'>Size</th><td>Blu</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>aluminum</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>sans s dded pasc spa apilecr uices eene t oleuspr ily atae rino e blu oriss c serce aucn t f maira d baie uib ow s t cy ea bies aee</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>Blu</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>SANREMO</td></tr>
<tr><th align='left'>VLM Variant</th><td>RINO</td></tr>
<tr><th align='left'>VLM Family</th><td>juice</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Sanremo</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Rino</td></tr>
<tr><th align='left'>Resolver Family</th><td>juice</td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>vision model output matched</li>
<li>OCR text supported brand</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;SANREMO&quot;,
  &quot;product_variant&quot;: &quot;RINO&quot;,
  &quot;product_family&quot;: &quot;juice&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;aluminum&quot;,
  &quot;packaging_material&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;BLU&quot;,
  &quot;best_catalog_match&quot;: &quot;juice&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a can with a label indicating it is a juice product. The OCR text and logo suggest it is a Sanremo brand juice.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```
{
  &quot;brand&quot;: &quot;Sanremo&quot;,
  &quot;product_variant&quot;: &quot;Rino&quot;,
  &quot;product_family&quot;: &quot;juice&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;Blu&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: [&quot;vision model output matched&quot;, &quot;OCR text supported brand&quot;]
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
<tr><th align='left'>Material (OpenFoodFacts)</th><td>plastic</td></tr>
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
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a close-up of a white, round container with a green label, suggesting it is a tub. The OCR text &#x27;memes n&#x27; and the lack of clear branding or product information make it difficult to identify the brand or product family with certainty.&quot;
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

- The brand cannot be determined with certainty from the OCR text alone, as it contains only generic words (&quot;memes&quot; and &quot;n&quot;).
- However, the vision model output includes information about the container type, which is a tub.
- The notes section of the raw vision model output explicitly states that the image shows a close-up of a white, round container with a green label, suggesting it is a tub. This information supports the determination of the container type over any potential branding information.

Therefore, to prioritize accuracy and avoid hallucinating brand details, we set the &quot;brand&quot; field to an empty string for this consumer package.</pre>
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
<tr><th align='left'>Material (OpenFoodFacts)</th><td>plastic</td></tr>
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
<tr><th align='left'>Resolver Brand</th><td>Apple &amp; Eve</td></tr>
<tr><th align='left'>Resolver Variant</th><td>100% Juice</td></tr>
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
  &quot;brand&quot;: &quot;Apple &amp; Eve&quot;,
  &quot;product_variant&quot;: &quot;100% Juice&quot;,
  &quot;product_family&quot;: &quot;juice&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;181L&quot;,
  &quot;best_catalog_match&quot;: &quot;apple juice&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a plastic bottle with a label indicating it is apple juice.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```
{
  &quot;brand&quot;: &quot;Apple &amp; Eve&quot;,
  &quot;product_variant&quot;: &quot;100% Juice&quot;,
  &quot;product_family&quot;: &quot;juice&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;181L&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}
```</pre>
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
<tr><th align='left'>Display Name</th><td>Cro Lemon, sparkling water, 12 fl oz can</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Cro</td></tr>
<tr><th align='left'>Product</th><td>Cro Lemon</td></tr>
<tr><th align='left'>Variant</th><td>Lemon</td></tr>
<tr><th align='left'>Category</th><td>sparkling water</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>12 fl oz can</td></tr>
<tr><th align='left'>Size</th><td>12 fl oz</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>aluminum</td></tr>
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
<tr><th align='left'>Resolver Brand</th><td>Cro</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Lemon</td></tr>
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
  &quot;brand&quot;: &quot;Cro&quot;,
  &quot;product_variant&quot;: &quot;Lemon&quot;,
  &quot;product_family&quot;: &quot;sparkling water&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;aluminum&quot;,
  &quot;packaging_material&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;12 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;Cro Lemon Sparkling Water&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a can with a yellow label and the word &#x27;Lemon&#x27; prominently displayed, indicating it is a lemon-flavored sparkling water. The container type is clearly a can, and the material appears to be aluminum based on the reflective surface and shape.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>Here&#x27;s the normalized JSON output:

```
{
  &quot;brand&quot;: &quot;Cro&quot;,
  &quot;product_variant&quot;: &quot;Lemon&quot;,
  &quot;product_family&quot;: &quot;sparkling water&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;12 fl oz&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}
```

The OCR text `co z e e ouu s` was normalized to `Cro`, which is a common abbreviation for the brand name. This matches with the raw vision model output.

Note that I did not use the OCR text or the barcode information in this normalization, as it was not necessary for this specific case.</pre>
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
<tr><th align='left'>Display Name</th><td>Apple &amp; Eve Natural, juice, 12 fl oz can</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Apple &amp; Eve</td></tr>
<tr><th align='left'>Product</th><td>Apple &amp; Eve Natural</td></tr>
<tr><th align='left'>Variant</th><td>Natural</td></tr>
<tr><th align='left'>Category</th><td>juice</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>12 fl oz can</td></tr>
<tr><th align='left'>Size</th><td>12 fl oz</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>aluminum</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>s otood e s e</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>12 fl oz</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Apple &amp; Eve</td></tr>
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
  &quot;brand&quot;: &quot;Apple &amp; Eve&quot;,
  &quot;product_variant&quot;: &quot;Natural&quot;,
  &quot;product_family&quot;: &quot;juice&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;aluminum&quot;,
  &quot;packaging_material&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;12 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;Apple &amp; Eve Natural Iced Tea&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;product_variant&quot;],
  &quot;notes&quot;: &quot;The can is partially visible with the Apple &amp; Eve logo and the word &#x27;Natural&#x27; visible, indicating it is a juice product.&quot;
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

- The OCR text was &quot;s otood e s e&quot; which doesn&#x27;t provide any useful information about the product.
- The raw vision model output contained some potentially usable information, but it also included several notes and evidence that were unclear or not directly relevant to the product name.
- There were no visible barcodes on the image.
- Upon careful inspection of the raw vision model output, we can see that &quot;Apple &amp; Eve&quot; is present, but this seems more like a company name than a product brand.
- However, the presence of &quot;Natural&quot; and &quot;12 fl oz&quot;, along with the packaging details (can, aluminum), suggests it might be related to a juice product.
- Since there were no visible barcodes or explicit brand mentions, we default to an empty brand.</pre>
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
<tr><th align='left'>Display Name</th><td>Cro Lemon, sparkling water, 0 calories can</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Cro</td></tr>
<tr><th align='left'>Product</th><td>Cro Lemon</td></tr>
<tr><th align='left'>Variant</th><td>Lemon</td></tr>
<tr><th align='left'>Category</th><td>sparkling water</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>0 calories can</td></tr>
<tr><th align='left'>Size</th><td>0 calories</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>metal</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>e s re s e e essenced water 0 calore</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>0 calories</td></tr>
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
  &quot;container_spec&quot;: &quot;aluminum&quot;,
  &quot;packaging_material&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;0 calories&quot;,
  &quot;best_catalog_match&quot;: &quot;sparkling water&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The can is aluminum, as indicated by the reflective surface and the shape of the can.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>Here&#x27;s how you would normalize noisy OCR and vision outputs for a single consumer package using JSON:

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
```</pre>
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
<tr><th align='left'>Display Name</th><td>water can</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td>water</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>1 Can can</td></tr>
<tr><th align='left'>Size</th><td>1 Can</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>aluminum</td></tr>
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
  &quot;product_family&quot;: &quot;water&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;packaging_material&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;1 Can&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a can with a nutrition facts label, indicating it is a beverage, likely water, given the lack of calories and sugar content.&quot;
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
<tr><th align='left'>Display Name</th><td>LaCroix Sparkling Lemon, soda, 0-SWEETENER 0-SODIUM can</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>LaCroix</td></tr>
<tr><th align='left'>Product</th><td>LaCroix Sparkling Lemon</td></tr>
<tr><th align='left'>Variant</th><td>Sparkling Lemon</td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>0-SWEETENER 0-SODIUM can</td></tr>
<tr><th align='left'>Size</th><td>0-SWEETENER 0-SODIUM</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>metal</td></tr>
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
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>LaCroix</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Sparkling Lemon</td></tr>
<tr><th align='left'>Resolver Family</th><td>soda</td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>Both OCR and vision model output were used for normalization.</li></ul>
      
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
  &quot;container_spec&quot;: &quot;aluminum&quot;,
  &quot;packaging_material&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;0-SWEETENER 0-SODIUM&quot;,
  &quot;best_catalog_match&quot;: &quot;LaCroix Sparkling Water&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The can is labeled as &#x27;Sparkling Lemon&#x27; and &#x27;Naturally&#x27;, indicating it is a sparkling water product. The &#x27;0-SWEETENER 0-SODIUM&#x27; text suggests it is a diet or low-sodium version.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;LaCroix&quot;,
  &quot;product_variant&quot;: &quot;Sparkling Lemon&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;0-SWEETENER 0-SODIUM&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: [
    &quot;Both OCR and vision model output were used for normalization.&quot;
  ]
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
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Fanta, sparkling water, 355ml can</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Fanta</td></tr>
<tr><th align='left'>Product</th><td>Fanta</td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td>sparkling water</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>355ml can</td></tr>
<tr><th align='left'>Size</th><td>355ml</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>aluminum</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>cas won cous cesnasse tmaneen soan enaics caavm</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>355ml</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Fanta</td></tr>
<tr><th align='left'>VLM Variant</th><td>Sparkling Water</td></tr>
<tr><th align='left'>VLM Family</th><td>sparkling water</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Fanta</td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
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
  &quot;packaging_material&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;355ml&quot;,
  &quot;best_catalog_match&quot;: &quot;Fanta Sparkling Water&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a can with the Fanta logo and the text &#x27;Sparkling Water&#x27; on it.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Fanta&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;sparkling water&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;355ml&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}
```

Explanation:

- The OCR text was not provided, so I relied on the raw vision model output.
- The `brand` field is set to `&quot;Fanta&quot;`, which is the most accurate value based on the raw vision model output.
- Since there is no other brand information available, `product_variant` and `product_family` are left empty.
- The container type and spec are set to `&quot;can&quot;` and `&quot;aluminum&quot;` respectively, as per the raw vision model output.
- The size text is set to `&quot;355ml&quot;`, which was extracted from the raw vision model output.
- Confidence is set to 0.9 based on the evidence provided in the raw vision model output.
- No reasons are included since there is no indication of any errors or ambiguities in the data.</pre>
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
<tr><th align='left'>Display Name</th><td>San Pellegrino Lime, juice, 330ml can</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>San Pellegrino</td></tr>
<tr><th align='left'>Product</th><td>San Pellegrino Lime</td></tr>
<tr><th align='left'>Variant</th><td>Lime</td></tr>
<tr><th align='left'>Category</th><td>juice</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>330ml can</td></tr>
<tr><th align='left'>Size</th><td>330ml</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>aluminum</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>uien og falow sudaed erult juices wpalico soa sumpelilcn d tes sa 5a2 ruptd los lecringi in nads sio dtind cooe lite wresta fot t nsunc away sd sanon aok nein uperaye aseudel yleaxo e ots ime mua eraun seaits r o s une nl</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>330ml</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>San Pellegrino</td></tr>
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
  &quot;brand&quot;: &quot;San Pellegrino&quot;,
  &quot;product_variant&quot;: &quot;Lime&quot;,
  &quot;product_family&quot;: &quot;juice&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;metal can&quot;,
  &quot;packaging_material&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;330ml&quot;,
  &quot;best_catalog_match&quot;: &quot;sparkling water&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The can is labeled as a fruit juice with added sugar, which aligns with the &#x27;juice&#x27; category. The presence of a lime image and the brand name &#x27;San Pellegrino&#x27; suggests it is a flavored sparkling water.&quot;
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
<tr><th align='left'>Display Name</th><td>Lucozade Sparkling Water, juice, 330ml can</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Lucozade</td></tr>
<tr><th align='left'>Product</th><td>Lucozade Sparkling Water</td></tr>
<tr><th align='left'>Variant</th><td>Sparkling Water</td></tr>
<tr><th align='left'>Category</th><td>juice</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>330ml can</td></tr>
<tr><th align='left'>Size</th><td>330ml</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>aluminum</td></tr>
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
  &quot;brand&quot;: &quot;Lucozade&quot;,
  &quot;product_variant&quot;: &quot;Sparkling Water&quot;,
  &quot;product_family&quot;: &quot;Juice&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;aluminum&quot;,
  &quot;packaging_material&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;330ml&quot;,
  &quot;best_catalog_match&quot;: &quot;Juice&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The can is green with a logo and text indicating it is a Lucozade product, likely a juice drink.&quot;
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
<tr><th align='left'>Material (OpenFoodFacts)</th><td>plastic</td></tr>
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
<tr><th align='left'>Resolver Brand</th><td>yogurt</td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td>yogurt</td></tr>
<tr><th align='left'>Resolver Container</th><td>tub</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>Raw vision model output was used to determine the brand and product family.</li>
<li>The OCR text was not sufficient to accurately identify the brand, so it was combined with the raw vision model output.</li></ul>
      
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
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;100 ml&quot;,
  &quot;best_catalog_match&quot;: &quot;yogurt tub&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;shape&quot;, &quot;size&quot;],
  &quot;notes&quot;: &quot;The container is designed for single-serve yogurt, with a single compartment and a size of 100 ml, as indicated by the text on the side.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```
{
  &quot;brand&quot;: &quot;yogurt&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;yogurt&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;single compartment&quot;,
  &quot;size_text&quot;: &quot;100 ml&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: [
    &quot;Raw vision model output was used to determine the brand and product family.&quot;,
    &quot;The OCR text was not sufficient to accurately identify the brand, so it was combined with the raw vision model output.&quot;
  ]
}
```</pre>
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
<tr><th align='left'>Material (OpenFoodFacts)</th><td>plastic</td></tr>
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
<tr><th align='left'>Resolver Brand</th><td>Gotham Greens</td></tr>
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
  &quot;container_spec&quot;: &quot;round, plastic&quot;,
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;Sustainably Grown Lettuce&quot;,
  &quot;best_catalog_match&quot;: &quot;salad&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The container appears to be a plastic tub used for storing fresh produce, specifically baby butterhead lettuce.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```
{
  &quot;brand&quot;: &quot;Gotham Greens&quot;,
  &quot;product_variant&quot;: &quot;Baby Butterhead&quot;,
  &quot;product_family&quot;: &quot;produce&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;round, plastic&quot;,
  &quot;size_text&quot;: &quot;Sustainably Grown Lettuce&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}
```</pre>
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
<tr><th align='left'>Material (OpenFoodFacts)</th><td>aluminum</td></tr>
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
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
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
  &quot;container_spec&quot;: &quot;aluminum&quot;,
  &quot;packaging_material&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;0-calorie&quot;,
  &quot;best_catalog_match&quot;: &quot;sparkling water&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The can is labeled as &#x27;Sparkling Lime Water&#x27; and is a 0-calorie drink.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;sparkling water&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;0-calorie&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}</pre>
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
        <tr><th align='left'>Detection</th><td>weak</td></tr>
<tr><th align='left'>Display Name</th><td>sparkling water can</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td>sparkling water</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>5.5 oz can</td></tr>
<tr><th align='left'>Size</th><td>5.5 oz</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>aluminum</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>bacts niiriton sic natuns caories fioe ae dv s taturb l sis s</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>5.5 oz</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td>sparkling water</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>sparkling water</td></tr>
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
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;sparkling water&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;packaging_material&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;5.5 oz&quot;,
  &quot;best_catalog_match&quot;: &quot;sparkling water&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;shape&quot;, &quot;text&quot;],
  &quot;notes&quot;: &quot;The image shows a can with a nutrition facts label, which is typical for beverages. The text &#x27;5.5 oz&#x27; suggests the size of the can.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;sparkling water&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;sparkling water&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;5.5 oz&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}
```

Note that I have used a basic set of brand normalizations and added the `product_family` field as per the original output to ensure that it is at least partially identified. If you need more complex logic for handling the `brand` and `product_variant`, please let me know and I can adjust accordingly.</pre>
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
<tr><th align='left'>Display Name</th><td>San Pellegrino Mineral Water, water, 500 ml bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>San Pellegrino</td></tr>
<tr><th align='left'>Product</th><td>San Pellegrino Mineral Water</td></tr>
<tr><th align='left'>Variant</th><td>Mineral Water</td></tr>
<tr><th align='left'>Category</th><td>water</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>500 ml bottle</td></tr>
<tr><th align='left'>Size</th><td>500 ml</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>plastic</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>idsns to w ondaded o d c cacsy tes tvaenw delym onidoet onone saeel loroae ari onoes onieen unomtg</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>500 ml</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>San Pellegrino</td></tr>
<tr><th align='left'>VLM Variant</th><td>Mineral Water</td></tr>
<tr><th align='left'>VLM Family</th><td>water</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>San Pellegrino</td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
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
  &quot;container_spec&quot;: &quot;500 ml&quot;,
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;500 ml&quot;,
  &quot;best_catalog_match&quot;: &quot;San Pellegrino Sparkling Water&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a green plastic bottle with a label indicating it is San Pellegrino mineral water.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;San Pellegrino&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;water&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;500 ml&quot;,
  &quot;size_text&quot;: &quot;500 ml&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}
```</pre>
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
<tr><th align='left'>Package</th><td>double compartment</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>plastic</td></tr>
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
  &quot;product_family&quot;: &quot;yogurt&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;double compartment&quot;,
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;yogurt tub&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;shape&quot;],
  &quot;notes&quot;: &quot;The container has a double compartment design, which is typical for yogurt tubs. The material appears to be plastic, and the shape is consistent with a yogurt tub.&quot;
}
```</pre>
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
<tr><th align='left'>Display Name</th><td>round, metallic, with a lid</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>jar</td></tr>
<tr><th align='left'>Package</th><td>round, metallic, with a lid</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>aluminum</td></tr>
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
<tr><th align='left'>Resolver Container</th><td>jar</td></tr>
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
  &quot;container_spec&quot;: &quot;round, metallic, with a lid&quot;,
  &quot;packaging_material&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a metallic container with a circular opening, likely a jar, with a lid. The material appears to be aluminum based on the reflective surface and the circular shape is typical for jars.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>Here&#x27;s the normalized JSON output:

```
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;jar&quot;,
  &quot;container_spec&quot;: &quot;round, metallic, with a lid&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: []
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
<tr><th align='left'>Display Name</th><td>Sprite 0-SWEETENED, soda, 12 fl oz can</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Sprite</td></tr>
<tr><th align='left'>Product</th><td>Sprite 0-SWEETENED</td></tr>
<tr><th align='left'>Variant</th><td>0-SWEETENED</td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>12 fl oz can</td></tr>
<tr><th align='left'>Size</th><td>12 fl oz</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>metal</td></tr>
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
  &quot;packaging_material&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;12 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;Sprite Zero&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The can is labeled as &#x27;0-SWEETENED&#x27; and &#x27;LIME WATER&#x27;, indicating it is a sugar-free lime-flavored soda.&quot;
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

- Normalized the OCR output to &quot;Sprite&quot; and matched it with the raw vision model output.
- The `brand` is not a generic category word, so no change was made.
- There&#x27;s an empty brand string in the vision model output, but its confidence level is 0.9. 
- Since the `confidence` value from the vision model is higher than the OCR text, we will use this data instead of OCR.</pre>
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
<tr><th align='left'>Material (OpenFoodFacts)</th><td>metal</td></tr>
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
      <p><strong>Resolver reasons</strong></p><ul><li>{&#x27;detail&#x27;: &#x27;Ocr text and vision model output match&#x27;, &#x27;description&#x27;: &#x27;OCR text: lin nauras osson er te oaswels gae; Raw vision model output: La Croix, Lime, soda, can, aluminum&#x27;}</li></ul>
      
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
  &quot;container_spec&quot;: &quot;aluminum&quot;,
  &quot;packaging_material&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;0-calorie&quot;,
  &quot;best_catalog_match&quot;: &quot;LaCroix Lime&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a can with the LaCroix logo and the word &#x27;Lime&#x27; on it, indicating it is a lime-flavored LaCroix soda.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```
{
  &quot;brand&quot;: &quot;La Croix&quot;,
  &quot;product_variant&quot;: &quot;Lime&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;0-calorie&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: [
    {
      &quot;detail&quot;: &quot;Ocr text and vision model output match&quot;,
      &quot;description&quot;: &quot;OCR text: lin nauras osson er te oaswels gae; Raw vision model output: La Croix, Lime, soda, can, aluminum&quot;
    }
  ]
}
```</pre>
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
<tr><th align='left'>Material (OpenFoodFacts)</th><td>aluminum</td></tr>
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
  &quot;container_spec&quot;: &quot;aluminum&quot;,
  &quot;packaging_material&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;330ml&quot;,
  &quot;best_catalog_match&quot;: &quot;Sanpellegrino Blood Orange&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The can is aluminum, as indicated by the recycling symbol and the visual material. The product is a juice, as suggested by the brand and the product name.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;Sanpellegrino&quot;,
  &quot;product_variant&quot;: &quot;Blood Orange&quot;,
  &quot;product_family&quot;: &quot;juice&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;aluminum&quot;,
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
<tr><th align='left'>Display Name</th><td>Coca-Cola Blood Orange, soda, 10 can</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Product</th><td>Coca-Cola Blood Orange</td></tr>
<tr><th align='left'>Variant</th><td>Blood Orange</td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>10 can</td></tr>
<tr><th align='left'>Size</th><td>10</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>aluminum</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>cocac io lens sies</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>10</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>VLM Variant</th><td>Blood Orange</td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Coca-Cola</td></tr>
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
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;Blood Orange&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;aluminum&quot;,
  &quot;packaging_material&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;10&quot;,
  &quot;best_catalog_match&quot;: &quot;soda&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The can is aluminum, which is typical for soft drinks. The &#x27;10&#x27; likely refers to the volume in ounces.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```
{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;Blood Orange&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;10&quot;,
  &quot;confidence&quot;: 0.9,
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
<tr><th align='left'>Display Name</th><td>San Pellegrino Blood Orange, juice, 1508 g can</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>San Pellegrino</td></tr>
<tr><th align='left'>Product</th><td>San Pellegrino Blood Orange</td></tr>
<tr><th align='left'>Variant</th><td>Blood Orange</td></tr>
<tr><th align='left'>Category</th><td>juice</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>1508 g can</td></tr>
<tr><th align='left'>Size</th><td>1508 g</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>aluminium</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>ce suke with ca real ne nacen s anpellit aso dat cea einr sutna tallan an biflds t eseon less ciag fo blood suc s eant ops mnsson s 1157 1508 g 0 silhae ono</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>1508 g</td></tr>
<tr><th align='left'>Barcodes</th><td>04159490 &lt;br/&gt;&lt;small&gt;&lt;i&gt;(via OpenCV BarcodeDetector)&lt;/i&gt; -&gt; &lt;b&gt;No DB Match&lt;/b&gt;&lt;/small&gt;</td></tr>
<tr><th align='left'>VLM Brand</th><td>San Pellegrino</td></tr>
<tr><th align='left'>VLM Variant</th><td>Blood Orange</td></tr>
<tr><th align='left'>VLM Family</th><td>juice</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>San Pellegrino</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Blood Orange</td></tr>
<tr><th align='left'>Resolver Family</th><td>juice</td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>{&#x27;@type&#x27;: &#x27;owl:SameAs&#x27;, &#x27;mismatched_input&#x27;: True}</li>
<li>{&#x27;@type&#x27;: &#x27;owl:SameAs&#x27;, &#x27;database_not_found&#x27;: True}</li></ul>
      
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
  &quot;container_spec&quot;: &quot;recyclable&quot;,
  &quot;packaging_material&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;330 ml&quot;,
  &quot;best_catalog_match&quot;: &quot;San Pellegrino Blood Orange Can&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The can is recyclable and made of aluminum, as indicated by the recycling symbol and the material description on the can.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;San Pellegrino&quot;,
  &quot;product_variant&quot;: &quot;Blood Orange&quot;,
  &quot;product_family&quot;: &quot;juice&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;recyclable&quot;,
  &quot;size_text&quot;: &quot;330 ml&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: [
    {
      &quot;@type&quot;: &quot;owl:SameAs&quot;,
      &quot;mismatched_input&quot;: true
    },
    {
      &quot;@type&quot;: &quot;owl:SameAs&quot;,
      &quot;database_not_found&quot;: true
    }
  ]
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
<tr><th align='left'>Display Name</th><td>Ciao! Sliced Orange, juice, 10 can</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Ciao!</td></tr>
<tr><th align='left'>Product</th><td>Ciao! Sliced Orange</td></tr>
<tr><th align='left'>Variant</th><td>Sliced Orange</td></tr>
<tr><th align='left'>Category</th><td>juice</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>10 can</td></tr>
<tr><th align='left'>Size</th><td>10</td></tr>
<tr><th align='left'>Material (OpenFoodFacts)</th><td>aluminum</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>20 d do coot dfdo ovle eve sa ise se ol vs in oha sie ns hu ivan line</td></tr>
<tr><th align='left'>OCR Engine</th><td>keras-ocr</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>10</td></tr>
<tr><th align='left'>Barcodes</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Ciao!</td></tr>
<tr><th align='left'>VLM Variant</th><td>Sliced Orange</td></tr>
<tr><th align='left'>VLM Family</th><td>juice</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Mountain Dew</td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td>juice</td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.2</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>Brand normalization needed</li>
<li>Vision model output was incorrect</li></ul>
      
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
  &quot;container_spec&quot;: &quot;aluminum&quot;,
  &quot;packaging_material&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;10&quot;,
  &quot;best_catalog_match&quot;: &quot;soda&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The can is designed with a logo and text indicating it is a beverage, likely a juice or soda, with a sliced orange as the main flavor.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>```
{
  &quot;brand&quot;: &quot;Mountain Dew&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;juice&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;10&quot;,
  &quot;confidence&quot;: 0.2,
  &quot;reasons&quot;: [
    &quot;Brand normalization needed&quot;,
    &quot;Vision model output was incorrect&quot;
  ]
}
```

Explanation of the normalized data:

*   Brand: The provided OCR text and raw vision model output did not contain a recognizable brand name. However, upon closer inspection, it is likely that the actual brand name is Mountain Dew, which matches the product variant mentioned in the raw vision model output.
*   Product Variant: Since the OCR text did not contain any information about the product variant, this field remains empty.
*   Product Family: The raw vision model output correctly identified the product family as &quot;juice&quot;.
*   Container Type and Spec: These fields were also correctly identified by the raw vision model output.
*   Size Text: This field was accurately detected in the OCR text.
*   Confidence: Since there were discrepancies between the OCR text and raw vision model output, the confidence value is lower than expected.
*   Reasons: A list of reasons why the data needed to be normalized includes brand normalization due to incorrect or missing information and recognition of the vision model&#x27;s potential error.</pre>
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
<tr><th align='left'>Material (OpenFoodFacts)</th><td>aluminum</td></tr>
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
  &quot;brand&quot;: &quot;Tepache&quot;,
  &quot;product_variant&quot;: &quot;Mango Chileno&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;aluminum&quot;,
  &quot;packaging_material&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;12 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;soda&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The can is red with a pineapple logo and text indicating it is a modern Mexican soda.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>{
  &quot;brand&quot;: &quot;Tepache&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;12 fl oz&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
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
<tr><th align='left'>Material (OpenFoodFacts)</th><td>aluminum</td></tr>
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
  &quot;brand&quot;: &quot;Lemon&quot;,
  &quot;product_variant&quot;: &quot;Sparkling&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;12 fl oz&quot;,
  &quot;packaging_material&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;12 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;soda&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a yellow can with a lemon logo and text indicating it is a sparkling soda.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre>Here&#x27;s the normalized JSON output:

```
{
  &quot;brand&quot;: &quot;Lemon&quot;,
  &quot;product_variant&quot;: &quot;Sparkling&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;12 fl oz&quot;,
  &quot;size_text&quot;: &quot;12 fl oz&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}
```

Explanation:

1. The `brand` was corrected from an OCR result to a more accurate output from the raw vision model.
2. Since both OCR and vision outputs were available, we can be confident in the brand name being &quot;Lemon&quot;.
3. The product variant &quot;Sparkling&quot; matches well with this brand and should remain unchanged.

Note that if the OCR text or the raw vision model output provided different values for any of these fields, the normalized JSON would reflect those differences.</pre>
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
<tr><th align='left'>Material (OpenFoodFacts)</th><td>plastic</td></tr>
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
      <p><strong>Resolver reasons</strong></p><ul><li>{&#x27;type&#x27;: &#x27;ocr&#x27;}</li>
<li>{&#x27;type&#x27;: &#x27;vision model output&#x27;}</li></ul>
      
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
  &quot;packaging_material&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;NET WT 26.5 OZ (750g)&quot;,
  &quot;best_catalog_match&quot;: &quot;Nutella Hazelnut Spread&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a jar of Nutella, a well-known hazelnut spread product.&quot;
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
  &quot;reasons&quot;: [
    {
      &quot;type&quot;: &quot;ocr&quot;
    },
    {
      &quot;type&quot;: &quot;vision model output&quot;
    }
  ]
}</pre>
</details>
