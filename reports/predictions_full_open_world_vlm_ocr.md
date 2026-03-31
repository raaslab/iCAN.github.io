# Prediction Report

Source JSON: `predictions_full_open_world_vlm_ocr.json`

Entries: 100

This file is intended for side-by-side visual review in your editor preview.


## 1. hires_20260208-211749_bottle_0.94.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-211749_bottle_0.94.jpg" alt="hires_20260208-211749_bottle_0.94.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-211749_bottle_0.94.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Deep Park, water, 500ml bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Deep</td></tr>
<tr><th align='left'>Product</th><td>Deep Park</td></tr>
<tr><th align='left'>Variant</th><td>Park</td></tr>
<tr><th align='left'>Category</th><td>water</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>500ml bottle</td></tr>
<tr><th align='left'>Size</th><td>500ml</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>= Sy m ot de oe i at rd eto i a an Ps oa</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot180</td></tr>
<tr><th align='left'>OCR Size</th><td>500ml</td></tr>
<tr><th align='left'>VLM Brand</th><td>Deep</td></tr>
<tr><th align='left'>VLM Variant</th><td>Park</td></tr>
<tr><th align='left'>VLM Family</th><td>water</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Deep</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Park</td></tr>
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
  &quot;brand&quot;: &quot;Deep&quot;,
  &quot;product_variant&quot;: &quot;Park&quot;,
  &quot;product_family&quot;: &quot;water&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;500ml&quot;,
  &quot;size_text&quot;: &quot;500ml&quot;,
  &quot;best_catalog_match&quot;: &quot;water&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;shape&quot;, &quot;text&quot;],
  &quot;notes&quot;: &quot;The image shows a plastic bottle with a label indicating it is 500ml of water.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Deep&quot;,
  &quot;product_variant&quot;: &quot;Park&quot;,
  &quot;product_family&quot;: &quot;water&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;500ml&quot;,
  &quot;size_text&quot;: &quot;500ml&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}</pre>
</details>

## 2. hires_20260208-211749_bottle_0.97.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-211749_bottle_0.97.jpg" alt="hires_20260208-211749_bottle_0.97.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-211749_bottle_0.97.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Member&#x27;s Mark mixed nuts, snacks, 34 oz jar</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Member&#x27;s Mark</td></tr>
<tr><th align='left'>Product</th><td>Member&#x27;s Mark mixed nuts</td></tr>
<tr><th align='left'>Variant</th><td>mixed nuts</td></tr>
<tr><th align='left'>Category</th><td>snacks</td></tr>
<tr><th align='left'>Container</th><td>jar</td></tr>
<tr><th align='left'>Package</th><td>34 oz jar</td></tr>
<tr><th align='left'>Size</th><td>34 oz</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>r aN sy ES) Si S wt AF &amp; rn aS N/ a y &quot; \ in</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot180</td></tr>
<tr><th align='left'>OCR Size</th><td>34 oz</td></tr>
<tr><th align='left'>VLM Brand</th><td>Member&#x27;s Mark</td></tr>
<tr><th align='left'>VLM Variant</th><td>mixed nuts</td></tr>
<tr><th align='left'>VLM Family</th><td>spread</td></tr>
<tr><th align='left'>VLM Container</th><td>jar</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Member&#x27;s Mark</td></tr>
<tr><th align='left'>Resolver Variant</th><td>mixed nuts</td></tr>
<tr><th align='left'>Resolver Family</th><td>snacks</td></tr>
<tr><th align='left'>Resolver Container</th><td>jar</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Member&#x27;s Mark&quot;,
  &quot;product_variant&quot;: &quot;mixed nuts&quot;,
  &quot;product_family&quot;: &quot;spread&quot;,
  &quot;container_type&quot;: &quot;jar&quot;,
  &quot;container_spec&quot;: &quot;glass&quot;,
  &quot;size_text&quot;: &quot;34 oz&quot;,
  &quot;best_catalog_match&quot;: &quot;peanut butter&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The product is a spread, likely a type of nut butter, given the ingredients listed on the label.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Member&#x27;s Mark&quot;,
  &quot;product_variant&quot;: &quot;mixed nuts&quot;,
  &quot;product_family&quot;: &quot;snacks&quot;,
  &quot;container_type&quot;: &quot;jar&quot;,
  &quot;container_spec&quot;: &quot;glass&quot;,
  &quot;size_text&quot;: &quot;34 oz&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}</pre>
</details>

## 3. hires_20260208-211749_cup_0.94.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-211749_cup_0.94.jpg" alt="hires_20260208-211749_cup_0.94.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-211749_cup_0.94.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>nothing</td></tr>
<tr><th align='left'>Display Name</th><td>0.7 oz tub</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>tub</td></tr>
<tr><th align='left'>Package</th><td>0.7 oz tub</td></tr>
<tr><th align='left'>Size</th><td>0.7 oz</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>es re</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot270</td></tr>
<tr><th align='left'>OCR Size</th><td>0.7 oz</td></tr>
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
      <p><strong>Resolver reasons</strong></p><ul><li>OCR text is not legible to identify a brand</li></ul>
      
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
  &quot;container_spec&quot;: &quot;round&quot;,
  &quot;size_text&quot;: &quot;0.7 oz&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;, &quot;size_text&quot;],
  &quot;notes&quot;: &quot;The image shows a close-up of a circular container with a label indicating a net weight of 0.7 oz. The container appears to be a tub, possibly for a dairy product or spread, given the size and shape.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;round&quot;,
  &quot;size_text&quot;: &quot;0.7 oz&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [&quot;OCR text is not legible to identify a brand&quot;]
}</pre>
</details>

## 4. hires_20260208-211812_bottle_0.94.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-211812_bottle_0.94.jpg" alt="hires_20260208-211812_bottle_0.94.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-211812_bottle_0.94.jpg</code></p>
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
        <tr><th align='left'>OCR</th><td>Hae] eI a ee bce</td></tr>
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
      <p><strong>Resolver reasons</strong></p><ul><li>OCR text is not clear</li>
<li>No useful information extracted from OCR text for identifying the product or brand</li></ul>
      
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
  &quot;evidence&quot;: [&quot;shape&quot;, &quot;logo&quot;],
  &quot;notes&quot;: &quot;The image shows a plastic bottle with a label indicating recycling instructions. The OCR text is not clear and does not provide any useful information for identifying the product or brand.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> Based on the provided OCR text and vision model output, there seems to be no clear identification of the brand, product variant, product family, size_text, or best catalog match due to the noisy and unclear OCR text.

However, we can infer that the container type is a bottle based on the vision model&#x27;s analysis.

Here&#x27;s the normalized JSON output:

```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [
    &quot;OCR text is not clear&quot;,
    &quot;No useful information extracted from OCR text for identifying the product or brand&quot;
  ]
}
```</pre>
</details>

## 5. hires_20260208-211812_bottle_0.97.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-211812_bottle_0.97.jpg" alt="hires_20260208-211812_bottle_0.97.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-211812_bottle_0.97.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Member&#x27;s Mark Mixed Nuts with Sea Salt, snacks, NET WT 24.0Z (2 LB 2 OZ) 680 g jar</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Member&#x27;s Mark</td></tr>
<tr><th align='left'>Product</th><td>Member&#x27;s Mark Mixed Nuts with Sea Salt</td></tr>
<tr><th align='left'>Variant</th><td>Mixed Nuts with Sea Salt</td></tr>
<tr><th align='left'>Category</th><td>snacks</td></tr>
<tr><th align='left'>Container</th><td>jar</td></tr>
<tr><th align='left'>Package</th><td>NET WT 24.0Z (2 LB 2 OZ) 680 g jar</td></tr>
<tr><th align='left'>Size</th><td>NET WT 24.0Z (2 LB 2 OZ) 680 g</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>KS ~ SS XC ~N Coe) Cy) ran mS ‘in \\: Y</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot180</td></tr>
<tr><th align='left'>OCR Size</th><td>NET WT 24.0Z (2 LB 2 OZ) 680 g</td></tr>
<tr><th align='left'>VLM Brand</th><td>Member&#x27;s Mark</td></tr>
<tr><th align='left'>VLM Variant</th><td>Mixed Nuts</td></tr>
<tr><th align='left'>VLM Family</th><td>spread</td></tr>
<tr><th align='left'>VLM Container</th><td>jar</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Member&#x27;s Mark</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Mixed Nuts with Sea Salt</td></tr>
<tr><th align='left'>Resolver Family</th><td>snacks</td></tr>
<tr><th align='left'>Resolver Container</th><td>jar</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Member&#x27;s Mark&quot;,
  &quot;product_variant&quot;: &quot;Mixed Nuts&quot;,
  &quot;product_family&quot;: &quot;spread&quot;,
  &quot;container_type&quot;: &quot;jar&quot;,
  &quot;container_spec&quot;: &quot;with sea salt&quot;,
  &quot;size_text&quot;: &quot;NET WT 24.0Z (2 LB 2 OZ) 680 g&quot;,
  &quot;best_catalog_match&quot;: &quot;spread&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The product is a jar of mixed nuts with sea salt, likely intended as a spread or snack.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Member&#x27;s Mark&quot;,
  &quot;product_variant&quot;: &quot;Mixed Nuts with Sea Salt&quot;,
  &quot;product_family&quot;: &quot;Snacks&quot;,
  &quot;container_type&quot;: &quot;jar&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;NET WT 24.0Z (2 LB 2 OZ) 680 g&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}</pre>
</details>

## 6. hires_20260208-211812_cup_0.95.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-211812_cup_0.95.jpg" alt="hires_20260208-211812_cup_0.95.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-211812_cup_0.95.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>weak</td></tr>
<tr><th align='left'>Display Name</th><td>beauty or personal care tub</td></tr>
<tr><th align='left'>Confidence</th><td>0.5</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td>beauty or personal care</td></tr>
<tr><th align='left'>Container</th><td>tub</td></tr>
<tr><th align='left'>Package</th><td>NET WT. 6.7 OZ (190g) tub</td></tr>
<tr><th align='left'>Size</th><td>NET WT. 6.7 OZ (190g)</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>a 4 | @y a</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot270</td></tr>
<tr><th align='left'>OCR Size</th><td>NET WT. 6.7 OZ (190g)</td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td></td></tr>
<tr><th align='left'>VLM Container</th><td>tub</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td>beauty or personal care</td></tr>
<tr><th align='left'>Resolver Container</th><td>tub</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.5</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>floral design on the container</li></ul>
      
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
  &quot;container_spec&quot;: &quot;round&quot;,
  &quot;size_text&quot;: &quot;NET WT. 6.7 OZ (190g)&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;, &quot;size_text&quot;],
  &quot;notes&quot;: &quot;The image shows a close-up of a circular container with a label indicating a net weight of 6.7 ounces (190 grams). The label also features a floral design, which might suggest a product related to beauty or personal care, but the specific product family cannot be determined from the image alone.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;Beauty or Personal Care&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;round&quot;,
  &quot;size_text&quot;: &quot;NET WT. 6.7 OZ (190g)&quot;,
  &quot;confidence&quot;: 0.5,
  &quot;reasons&quot;: [&quot;floral design on the container&quot;]
}</pre>
</details>

## 7. hires_20260208-212321_bottle_0.94.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212321_bottle_0.94.jpg" alt="hires_20260208-212321_bottle_0.94.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212321_bottle_0.94.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>A&amp;W Root Beer, coffee drink, 500 mL bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>A&amp;W</td></tr>
<tr><th align='left'>Product</th><td>A&amp;W Root Beer</td></tr>
<tr><th align='left'>Variant</th><td>Root Beer</td></tr>
<tr><th align='left'>Category</th><td>coffee drink</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>500 mL bottle</td></tr>
<tr><th align='left'>Size</th><td>500 mL</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>i shes | trio) Ri tree co) ! Ky ei</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot90</td></tr>
<tr><th align='left'>OCR Size</th><td>500 mL</td></tr>
<tr><th align='left'>VLM Brand</th><td>A&amp;W</td></tr>
<tr><th align='left'>VLM Variant</th><td>Root Beer</td></tr>
<tr><th align='left'>VLM Family</th><td>coffee drink</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>A&amp;W</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Root Beer</td></tr>
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
  &quot;brand&quot;: &quot;A&amp;W&quot;,
  &quot;product_variant&quot;: &quot;Root Beer&quot;,
  &quot;product_family&quot;: &quot;coffee drink&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;500 mL&quot;,
  &quot;best_catalog_match&quot;: &quot;A&amp;W Root Beer&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a plastic bottle with the A&amp;W logo and &#x27;Root Beer&#x27; text, indicating it is a beverage product.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;A&amp;W&quot;,
  &quot;product_variant&quot;: &quot;Root Beer&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;500 mL&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}</pre>
</details>

## 8. hires_20260208-212333_can_0.86.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212333_can_0.86.jpg" alt="hires_20260208-212333_can_0.86.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212333_can_0.86.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Coca-Cola Star Wars Edition, soda, 12 fl oz can</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Product</th><td>Coca-Cola Star Wars Edition</td></tr>
<tr><th align='left'>Variant</th><td>Star Wars Edition</td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>12 fl oz can</td></tr>
<tr><th align='left'>Size</th><td>12 fl oz</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>=z Le pre T¢ ih &gt; Aas 8 % Vd § a Aan 2</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot180</td></tr>
<tr><th align='left'>OCR Size</th><td>12 fl oz</td></tr>
<tr><th align='left'>VLM Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>VLM Variant</th><td>Star Wars</td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Star Wars Edition</td></tr>
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
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;Star Wars&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;12 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;Coca-Cola Star Wars Edition&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a close-up of a red can with the Coca-Cola logo and &#x27;Star Wars&#x27; text, indicating it is a special edition can.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;Star Wars Edition&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;12 fl oz&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}</pre>
</details>

## 9. hires_20260208-212333_can_0.94.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212333_can_0.94.jpg" alt="hires_20260208-212333_can_0.94.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212333_can_0.94.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>LG, sparkling water, 355ml can</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>LG</td></tr>
<tr><th align='left'>Product</th><td>LG</td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td>sparkling water</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>355ml can</td></tr>
<tr><th align='left'>Size</th><td>355ml</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>LG NS SR Yo a iS \ Co’ lf,</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot180</td></tr>
<tr><th align='left'>OCR Size</th><td>355ml</td></tr>
<tr><th align='left'>VLM Brand</th><td>LG</td></tr>
<tr><th align='left'>VLM Variant</th><td>Sparkling Water</td></tr>
<tr><th align='left'>VLM Family</th><td>sparkling water</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>LG</td></tr>
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
  &quot;brand&quot;: &quot;LG&quot;,
  &quot;product_variant&quot;: &quot;Sparkling Water&quot;,
  &quot;product_family&quot;: &quot;sparkling water&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;soda can&quot;,
  &quot;size_text&quot;: &quot;355ml&quot;,
  &quot;best_catalog_match&quot;: &quot;LG Sparkling Water&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a can with a yellow label and the text &#x27;LG Sparkling Water&#x27; is partially visible, indicating it is a beverage product.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;LG&quot;,
  &quot;product_variant&quot;: &quot;Sparkling Water&quot;,
  &quot;product_family&quot;: &quot;sparkling water&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;soda can&quot;,
  &quot;size_text&quot;: &quot;355ml&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}</pre>
</details>

## 10. hires_20260208-212337_bottle_0.97.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212337_bottle_0.97.jpg" alt="hires_20260208-212337_bottle_0.97.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212337_bottle_0.97.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Delight Irish Cream, coffee creamer, 1.5L bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Delight</td></tr>
<tr><th align='left'>Product</th><td>Delight Irish Cream</td></tr>
<tr><th align='left'>Variant</th><td>Irish Cream</td></tr>
<tr><th align='left'>Category</th><td>coffee creamer</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>1.5L bottle</td></tr>
<tr><th align='left'>Size</th><td>1.5L</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>ss om he 4 Cer Wy K</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot270</td></tr>
<tr><th align='left'>OCR Size</th><td>1.5L</td></tr>
<tr><th align='left'>VLM Brand</th><td>Delight</td></tr>
<tr><th align='left'>VLM Variant</th><td>Irish Cream</td></tr>
<tr><th align='left'>VLM Family</th><td>coffee creamer</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Delight</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Irish Cream</td></tr>
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
  &quot;brand&quot;: &quot;Delight&quot;,
  &quot;product_variant&quot;: &quot;Irish Cream&quot;,
  &quot;product_family&quot;: &quot;coffee creamer&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;green and yellow&quot;,
  &quot;size_text&quot;: &quot;1.5L&quot;,
  &quot;best_catalog_match&quot;: &quot;Delight Irish Cream Coffee Creamer&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;text&quot;, &quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a bottle of Delight Irish Cream Coffee Creamer with a green and yellow label, indicating it is a coffee creamer product.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Delight&quot;,
  &quot;product_variant&quot;: &quot;Irish Cream&quot;,
  &quot;product_family&quot;: &quot;coffee creamer&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;green and yellow&quot;,
  &quot;size_text&quot;: &quot;1.5L&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}</pre>
</details>

## 11. hires_20260208-212337_can_0.93.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212337_can_0.93.jpg" alt="hires_20260208-212337_can_0.93.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212337_can_0.93.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Coca-Cola Star Wars, soda, 355ml can</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Product</th><td>Coca-Cola Star Wars</td></tr>
<tr><th align='left'>Variant</th><td>Star Wars</td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>355ml can</td></tr>
<tr><th align='left'>Size</th><td>355ml</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>ae “sy ne 1 = \ \e&quot; easy 1h</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>355ml</td></tr>
<tr><th align='left'>VLM Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>VLM Variant</th><td>Star Wars</td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Star Wars</td></tr>
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
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;Star Wars&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;355ml&quot;,
  &quot;best_catalog_match&quot;: &quot;Coca-Cola Star Wars can&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a close-up of a Coca-Cola can with a Star Wars theme, featuring the iconic Coca-Cola logo and the Star Wars branding.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;Star Wars&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;355ml&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}</pre>
</details>

## 12. hires_20260208-212337_can_0.95.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212337_can_0.95.jpg" alt="hires_20260208-212337_can_0.95.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212337_can_0.95.jpg</code></p>
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
        <tr><th align='left'>OCR</th><td>hog CZ. fy a 4 e a % hc ae N G</td></tr>
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
      <p><strong>Resolver reasons</strong></p><ul><li>The OCR text is not clear and the image does not provide enough information to confidently identify the product family or other details.</li></ul>
      
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
  &quot;notes&quot;: &quot;The image shows a close-up of a can with a yellow label and some text, but the OCR text is not clear and the shortlist candidates are not provided. The image does not provide enough information to confidently identify the product family or other details.&quot;
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
  &quot;reasons&quot;: [
    &quot;The OCR text is not clear and the image does not provide enough information to confidently identify the product family or other details.&quot;
  ]
}</pre>
</details>

## 13. hires_20260208-212337_cup_0.94.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212337_cup_0.94.jpg" alt="hires_20260208-212337_cup_0.94.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212337_cup_0.94.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Chobani Vanilla, dairy, 5.3 oz (150g) tub</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Chobani</td></tr>
<tr><th align='left'>Product</th><td>Chobani Vanilla</td></tr>
<tr><th align='left'>Variant</th><td>Vanilla</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>tub</td></tr>
<tr><th align='left'>Package</th><td>5.3 oz (150g) tub</td></tr>
<tr><th align='left'>Size</th><td>5.3 oz (150g)</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>0 eae ri ea iy ly &quot;OREO TE, VT BILLiOn® Authentically eratted | Nutt {ban artificial avor tificlal Re pr ervative ners [hase Juten [nite Yogurt FAST [ese | td eH! a NEA YOGURT ue NCE | ] } eon</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot180</td></tr>
<tr><th align='left'>OCR Size</th><td>5.3 oz (150g)</td></tr>
<tr><th align='left'>VLM Brand</th><td>Chobani</td></tr>
<tr><th align='left'>VLM Variant</th><td>Vanilla</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>tub</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td>Vanilla</td></tr>
<tr><th align='left'>Resolver Family</th><td>dairy</td></tr>
<tr><th align='left'>Resolver Container</th><td>tub</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>OREO not recognized as a brand</li>
<li>BilliOn and Nutt are not known as OREO product variants</li></ul>
      
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
  &quot;container_spec&quot;: &quot;5.3 oz (150g)&quot;,
  &quot;size_text&quot;: &quot;5.3 oz (150g)&quot;,
  &quot;best_catalog_match&quot;: &quot;yogurt&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a close-up of a Chobani yogurt container with the brand name and product variant clearly visible.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;Vanilla&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;5.3 oz (150g)&quot;,
  &quot;size_text&quot;: &quot;5.3 oz (150g)&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: [
    &quot;OREO not recognized as a brand&quot;,
    &quot;BilliOn and Nutt are not known as OREO product variants&quot;
  ]
}</pre>
</details>

## 14. hires_20260208-212337_thermoform_0.96.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212337_thermoform_0.96.jpg" alt="hires_20260208-212337_thermoform_0.96.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212337_thermoform_0.96.jpg</code></p>
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
<tr><th align='left'>Container</th><td>jar</td></tr>
<tr><th align='left'>Package</th><td>square</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>ff = oN OC /ji7 ra) B</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
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
  &quot;container_spec&quot;: &quot;square&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a square glass jar with a lid, but there is no visible branding or text to identify the product family or variant.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> Based on the provided OCR text and vision model output, it appears that the image does not contain clear branding information. However, I can provide an example of how the schema might look if we assume the brand is &quot;Fanta&quot; based on the initial characters of the OCR text (ff = oN OC could potentially be a shortened version of Fanta).

```json
{
  &quot;brand&quot;: &quot;Fanta&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;jar&quot;,
  &quot;container_spec&quot;: &quot;square&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.5, // This is just an example confidence level, as the actual confidence cannot be determined without more context
  &quot;reasons&quot;: [&quot;OCR text suggests Fanta&quot;]
}
```</pre>
</details>

## 15. hires_20260208-212342_bottle_0.98.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212342_bottle_0.98.jpg" alt="hires_20260208-212342_bottle_0.98.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212342_bottle_0.98.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>ConAgra Foods, condiment, 130 jar</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>ConAgra Foods</td></tr>
<tr><th align='left'>Product</th><td>ConAgra Foods</td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td>condiment</td></tr>
<tr><th align='left'>Container</th><td>jar</td></tr>
<tr><th align='left'>Package</th><td>130 jar</td></tr>
<tr><th align='left'>Size</th><td>130</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>Oy See 7 Ly se te by, S Se Oy a AO ae 49 Ny )) an &amp;; — bu AU 2°, — = m IW,</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot270</td></tr>
<tr><th align='left'>OCR Size</th><td>130</td></tr>
<tr><th align='left'>VLM Brand</th><td>Conagra</td></tr>
<tr><th align='left'>VLM Variant</th><td>130</td></tr>
<tr><th align='left'>VLM Family</th><td>condiment</td></tr>
<tr><th align='left'>VLM Container</th><td>jar</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>ConAgra Foods</td></tr>
<tr><th align='left'>Resolver Variant</th><td>130</td></tr>
<tr><th align='left'>Resolver Family</th><td>condiment</td></tr>
<tr><th align='left'>Resolver Container</th><td>jar</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>Vision model output indicates it is a ConAgra Foods product</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Conagra&quot;,
  &quot;product_variant&quot;: &quot;130&quot;,
  &quot;product_family&quot;: &quot;condiment&quot;,
  &quot;container_type&quot;: &quot;jar&quot;,
  &quot;container_spec&quot;: &quot;recyclable&quot;,
  &quot;size_text&quot;: &quot;130&quot;,
  &quot;best_catalog_match&quot;: &quot;peanut butter&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The label indicates it is a Conagra product, and the jar is commonly used for spreads like peanut butter.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;ConAgra Foods&quot;,
  &quot;product_variant&quot;: &quot;130&quot;,
  &quot;product_family&quot;: &quot;condiment&quot;,
  &quot;container_type&quot;: &quot;jar&quot;,
  &quot;container_spec&quot;: &quot;recyclable&quot;,
  &quot;size_text&quot;: &quot;130&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: [&quot;Vision model output indicates it is a ConAgra Foods product&quot;]
}</pre>
</details>

## 16. hires_20260208-212342_can_0.82.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212342_can_0.82.jpg" alt="hires_20260208-212342_can_0.82.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212342_can_0.82.jpg</code></p>
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
        <tr><th align='left'>OCR</th><td>C eaN oe files |</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot180</td></tr>
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
      <p><strong>Resolver reasons</strong></p><ul><li>logo</li>
<li>shape</li></ul>
      
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
  &quot;notes&quot;: &quot;The image shows a partially opened Coca-Cola can with a pull-tab, indicating it is a soda can.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> Based on the rules and the given OCR text and vision model output, here&#x27;s the normalized JSON:

```json
{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: [&quot;logo&quot;, &quot;shape&quot;]
}
```

In this case, the OCR text is not providing additional information beyond what was already identified by the vision model, so the OCR text is not used in the final JSON output. However, the reasons for the identification are included to provide transparency about how the output was determined.</pre>
</details>

## 17. hires_20260208-212342_cup_0.86.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212342_cup_0.86.jpg" alt="hires_20260208-212342_cup_0.86.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212342_cup_0.86.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Daisy Sour Cream, dairy, 164 g jar</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Daisy</td></tr>
<tr><th align='left'>Product</th><td>Daisy Sour Cream</td></tr>
<tr><th align='left'>Variant</th><td>Sour Cream</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>jar</td></tr>
<tr><th align='left'>Package</th><td>164 g jar</td></tr>
<tr><th align='left'>Size</th><td>164 g</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>_—_ BRAND ‘Ou CREAM Pure Toy Natural” 3 Lbs (164g) Nan (ve</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot180</td></tr>
<tr><th align='left'>OCR Size</th><td>164 g</td></tr>
<tr><th align='left'>VLM Brand</th><td>Daisy</td></tr>
<tr><th align='left'>VLM Variant</th><td>Sour Cream</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>jar</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Daisy</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Sour Cream</td></tr>
<tr><th align='left'>Resolver Family</th><td>dairy</td></tr>
<tr><th align='left'>Resolver Container</th><td>jar</td></tr>
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
  &quot;container_type&quot;: &quot;jar&quot;,
  &quot;container_spec&quot;: &quot;3 lbs (1.36kg)&quot;,
  &quot;size_text&quot;: &quot;3 lbs (1.36kg)&quot;,
  &quot;best_catalog_match&quot;: &quot;dairy&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The container is a jar, commonly used for dairy products like sour cream.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Daisy&quot;,
  &quot;product_variant&quot;: &quot;Sour Cream&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;jar&quot;,
  &quot;container_spec&quot;: &quot;3 lbs (1.36kg)&quot;,
  &quot;size_text&quot;: &quot;3 lbs (1.36kg)&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}</pre>
</details>

## 18. hires_20260208-212344_bottle_0.96.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212344_bottle_0.96.jpg" alt="hires_20260208-212344_bottle_0.96.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212344_bottle_0.96.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Aquafina Mineral Water, water, 1.5 L bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Aquafina</td></tr>
<tr><th align='left'>Product</th><td>Aquafina Mineral Water</td></tr>
<tr><th align='left'>Variant</th><td>Mineral Water</td></tr>
<tr><th align='left'>Category</th><td>water</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>1.5 L bottle</td></tr>
<tr><th align='left'>Size</th><td>1.5 L</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>ss rn pe sagt ate i) U rebate Fh ca es a ir, i Ma if eo a S</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot180</td></tr>
<tr><th align='left'>OCR Size</th><td>1.5 L</td></tr>
<tr><th align='left'>VLM Brand</th><td>Aquafina</td></tr>
<tr><th align='left'>VLM Variant</th><td>Mineral Water</td></tr>
<tr><th align='left'>VLM Family</th><td>water</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Aquafina</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Mineral Water</td></tr>
<tr><th align='left'>Resolver Family</th><td>water</td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>OCR text does not provide additional information about the product.</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Aquafina&quot;,
  &quot;product_variant&quot;: &quot;Mineral Water&quot;,
  &quot;product_family&quot;: &quot;water&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;1.5 L&quot;,
  &quot;best_catalog_match&quot;: &quot;Aquafina 1.5L Mineral Water Bottle&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a plastic bottle with a label indicating it is Aquafina mineral water. The OCR text appears to be a mix of letters and numbers, possibly a code or a part of the label, but it does not provide additional information about the product.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Aquafina&quot;,
  &quot;product_variant&quot;: &quot;Mineral Water&quot;,
  &quot;product_family&quot;: &quot;water&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;1.5 L&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: [&quot;OCR text does not provide additional information about the product.&quot;]
}</pre>
</details>

## 19. hires_20260208-212344_bottle_0.98.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212344_bottle_0.98.jpg" alt="hires_20260208-212344_bottle_0.98.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212344_bottle_0.98.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Coca-Cola Zero, soda, 1.5L bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Product</th><td>Coca-Cola Zero</td></tr>
<tr><th align='left'>Variant</th><td>Zero</td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>1.5L bottle</td></tr>
<tr><th align='left'>Size</th><td>1.5L</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>” Ser SS we SS l) q HY Mh I as</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>1.5L</td></tr>
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
  &quot;size_text&quot;: &quot;1.5L&quot;,
  &quot;best_catalog_match&quot;: &quot;Coca-Cola Zero&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;size_text&quot;],
  &quot;notes&quot;: &quot;The image shows a plastic bottle with a label indicating it is a 1.5L bottle of Coca-Cola Zero.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;Zero&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;1.5L&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}</pre>
</details>

## 20. hires_20260208-212344_can_0.83.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212344_can_0.83.jpg" alt="hires_20260208-212344_can_0.83.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212344_can_0.83.jpg</code></p>
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
        <tr><th align='left'>OCR</th><td>4 A a ba : jr</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot180</td></tr>
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
      <p><strong>Resolver reasons</strong></p><ul><li>The image shows a close-up of a red and white Coca-Cola can with the iconic logo and pull-tab.</li></ul>
      
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
  &quot;notes&quot;: &quot;The image shows a close-up of a red and white Coca-Cola can with the iconic logo and pull-tab.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> Based on the provided rules, the JSON response would be:

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
    &quot;The image shows a close-up of a red and white Coca-Cola can with the iconic logo and pull-tab.&quot;
  ]
}
```</pre>
</details>

## 21. hires_20260208-212344_cup_0.73.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212344_cup_0.73.jpg" alt="hires_20260208-212344_cup_0.73.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212344_cup_0.73.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>nothing</td></tr>
<tr><th align='left'>Display Name</th><td>soda can</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>(355 mL) can</td></tr>
<tr><th align='left'>Size</th><td>(355 mL)</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>ip Pe. ag “} i Pi 7</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot270</td></tr>
<tr><th align='left'>OCR Size</th><td>(355 mL)</td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td></td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td>soda</td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>Insufficient data to confirm the brand</li></ul>
      
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
  &quot;size_text&quot;: &quot;(355 mL)&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a partially opened can with a red and silver color scheme, indicating it is likely a beverage can. The OCR text &#x27;355 mL&#x27; suggests the size of the can.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> Based on the provided OCR text and the vision model output, there seems to be no clear brand identification from the given data. However, considering the red and silver color scheme, it might suggest a cola-like beverage (such as Coca-Cola or Pepsi). But without more specific information, we cannot confirm the exact brand.

Here&#x27;s the JSON response:

```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;cola&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;(355 mL)&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [&quot;Insufficient data to confirm the brand&quot;]
}
```</pre>
</details>

## 22. hires_20260208-212344_thermoform_0.94.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212344_thermoform_0.94.jpg" alt="hires_20260208-212344_thermoform_0.94.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212344_thermoform_0.94.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>nothing</td></tr>
<tr><th align='left'>Display Name</th><td>2 g clamshell</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>clamshell</td></tr>
<tr><th align='left'>Package</th><td>2 g clamshell</td></tr>
<tr><th align='left'>Size</th><td>2 g</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>— a ae V2 g ia} f = UT p) SS SS ee: &lt;a</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot270</td></tr>
<tr><th align='left'>OCR Size</th><td>2 g</td></tr>
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
      <p><strong>Resolver reasons</strong></p><ul><li>OCR text is not clear and does not provide additional information.</li>
<li>Vision model output suggests multiple compartments but doesn&#x27;t specify the product type.</li></ul>
      
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
  &quot;container_spec&quot;: &quot;12-pack&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a clamshell container with multiple compartments, likely for holding individual bottles or cans. The OCR text is not clear and does not provide any additional information.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> Based on the provided OCR text and vision model output, there isn&#x27;t enough clear information to determine specific brand, product variant, or product family. Here&#x27;s the normalized JSON:

```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;clamshell&quot;,
  &quot;container_spec&quot;: &quot;12-pack&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [
    &quot;OCR text is not clear and does not provide additional information.&quot;,
    &quot;Vision model output suggests multiple compartments but doesn&#x27;t specify the product type.&quot;
  ]
}
```</pre>
</details>

## 23. hires_20260208-212350_bottle_0.98.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212350_bottle_0.98.jpg" alt="hires_20260208-212350_bottle_0.98.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212350_bottle_0.98.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Coca-Cola Diet Coke, Sugar Free, soda, 0 Calories bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Product</th><td>Coca-Cola Diet Coke, Sugar Free</td></tr>
<tr><th align='left'>Variant</th><td>Diet Coke, Sugar Free</td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>0 Calories bottle</td></tr>
<tr><th align='left'>Size</th><td>0 Calories</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>ad Pale of) v oD Cc WV ip oS</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot180</td></tr>
<tr><th align='left'>OCR Size</th><td>0 Calories</td></tr>
<tr><th align='left'>VLM Brand</th><td>Diet Coke</td></tr>
<tr><th align='left'>VLM Variant</th><td>Sugar Free</td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Diet Coke, Sugar Free</td></tr>
<tr><th align='left'>Resolver Family</th><td>soda</td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>OCR output suggests &#x27;Coke&#x27; which is normalized to &#x27;Coca-Cola&#x27;, and the vision model also identifies it as &#x27;Diet Coke&#x27;</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Diet Coke&quot;,
  &quot;product_variant&quot;: &quot;Sugar Free&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;0 Calories&quot;,
  &quot;best_catalog_match&quot;: &quot;Diet Coke&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a clear plastic bottle with a label indicating it is Diet Coke with 0 calories.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;Diet Coke, Sugar Free&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;0 Calories&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: [&quot;OCR output suggests &#x27;Coke&#x27; which is normalized to &#x27;Coca-Cola&#x27;, and the vision model also identifies it as &#x27;Diet Coke&#x27;&quot;]
}</pre>
</details>

## 24. hires_20260208-212350_cup_0.98.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212350_cup_0.98.jpg" alt="hires_20260208-212350_cup_0.98.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212350_cup_0.98.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>FAGE Grade A Pasteurized, dairy, 3/4 cup (170g) cup</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>FAGE</td></tr>
<tr><th align='left'>Product</th><td>FAGE Grade A Pasteurized</td></tr>
<tr><th align='left'>Variant</th><td>Grade A Pasteurized</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>cup</td></tr>
<tr><th align='left'>Package</th><td>3/4 cup (170g) cup</td></tr>
<tr><th align='left'>Size</th><td>3/4 cup (170g)</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>—_— ™ ~ of a. Fact! ac’ KAND i, Gat tion F OH) nC {A 4 cup (1704 ry —_— ‘aoves — WW KEEP REFRIGERATED cae DO NOT FREEZE 31 ONCE OPENED CONSUME jee WITHIN 5 DAYS 10% = 3% Use by date on lid i yt k produced thout ———— 0 differe note 0 distin 0 reat pee i a wrt &#x27;2) UY</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot180</td></tr>
<tr><th align='left'>OCR Size</th><td>3/4 cup (170g)</td></tr>
<tr><th align='left'>VLM Brand</th><td>FAGE</td></tr>
<tr><th align='left'>VLM Variant</th><td>Grade A Pasteurized</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>cup</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>FAGE</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Grade A Pasteurized</td></tr>
<tr><th align='left'>Resolver Family</th><td>dairy</td></tr>
<tr><th align='left'>Resolver Container</th><td>cup</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>The container is labeled as &#x27;Grade A Pasteurized&#x27; and &#x27;KEEP REFRIGERATED&#x27;, which are typical characteristics of dairy products.</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;FAGE&quot;,
  &quot;product_variant&quot;: &quot;Grade A Pasteurized&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;cup&quot;,
  &quot;container_spec&quot;: &quot;3/4 cup (170g)&quot;,
  &quot;size_text&quot;: &quot;3/4 cup (170g)&quot;,
  &quot;best_catalog_match&quot;: &quot;yogurt&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;text&quot;, &quot;shape&quot;],
  &quot;notes&quot;: &quot;The container is labeled as &#x27;Grade A Pasteurized&#x27; and &#x27;KEEP REFRIGERATED&#x27;, which are typical characteristics of yogurt.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;FAGE&quot;,
  &quot;product_variant&quot;: &quot;Grade A Pasteurized&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;cup&quot;,
  &quot;container_spec&quot;: &quot;3/4 cup (170g)&quot;,
  &quot;size_text&quot;: &quot;3/4 cup (170g)&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: [&quot;The container is labeled as &#x27;Grade A Pasteurized&#x27; and &#x27;KEEP REFRIGERATED&#x27;, which are typical characteristics of dairy products.&quot;]
}</pre>
</details>

## 25. hires_20260208-212352_bottle_0.97.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212352_bottle_0.97.jpg" alt="hires_20260208-212352_bottle_0.97.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212352_bottle_0.97.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Coca-Cola Diet Coke No Sugar, soda, 0 calories bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Product</th><td>Coca-Cola Diet Coke No Sugar</td></tr>
<tr><th align='left'>Variant</th><td>Diet Coke No Sugar</td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>0 calories bottle</td></tr>
<tr><th align='left'>Size</th><td>0 calories</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>id v1 wan &quot;iin</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot180</td></tr>
<tr><th align='left'>OCR Size</th><td>0 calories</td></tr>
<tr><th align='left'>VLM Brand</th><td>Diet Coke</td></tr>
<tr><th align='left'>VLM Variant</th><td>No Sugar</td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Diet Coke No Sugar</td></tr>
<tr><th align='left'>Resolver Family</th><td>soda</td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>OCR text supports Diet Coke but Vision Model suggests Coca-Cola</li>
<li>Vision Model provides additional details</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Diet Coke&quot;,
  &quot;product_variant&quot;: &quot;No Sugar&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;0 calories&quot;,
  &quot;best_catalog_match&quot;: &quot;Diet Coke bottle&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a plastic bottle with the Diet Coke logo and text indicating &#x27;No Sugar&#x27; and &#x27;0 calories&#x27;.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;Diet Coke No Sugar&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;0 calories&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: [&quot;OCR text supports Diet Coke but Vision Model suggests Coca-Cola&quot;, &quot;Vision Model provides additional details&quot;]
}</pre>
</details>

## 26. hires_20260208-212352_cup_0.97.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212352_cup_0.97.jpg" alt="hires_20260208-212352_cup_0.97.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212352_cup_0.97.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>FAGE USA Baby Industry, dairy, 160g tub</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>FAGE</td></tr>
<tr><th align='left'>Product</th><td>FAGE USA Baby Industry</td></tr>
<tr><th align='left'>Variant</th><td>USA Baby Industry</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>tub</td></tr>
<tr><th align='left'>Package</th><td>160g tub</td></tr>
<tr><th align='left'>Size</th><td>160g</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>un) af 2. == oN nl te — 0 ey Jo wm py uo SAVOS NIHLIM ot SWNSNOD G3N3dI 373344 LON 00 OFLVYFDIHIIY d3Iy um, co 6210 a Jb alin) a dno pig ang’ ne uC 4 syoe4 Uo Ly a</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>160g</td></tr>
<tr><th align='left'>VLM Brand</th><td>FAGE</td></tr>
<tr><th align='left'>VLM Variant</th><td>USA Baby Industry</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>tub</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>FAGE</td></tr>
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
  &quot;brand&quot;: &quot;FAGE&quot;,
  &quot;product_variant&quot;: &quot;USA Baby Industry&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;160g&quot;,
  &quot;size_text&quot;: &quot;160g&quot;,
  &quot;best_catalog_match&quot;: &quot;yogurt&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;text&quot;, &quot;logo&quot;],
  &quot;notes&quot;: &quot;The image shows a tub of yogurt with nutritional facts and a barcode, indicating it is a dairy product.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;FAGE&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;160g&quot;,
  &quot;size_text&quot;: &quot;160g&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}</pre>
</details>

## 27. hires_20260208-212354_bottle_0.98.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212354_bottle_0.98.jpg" alt="hires_20260208-212354_bottle_0.98.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212354_bottle_0.98.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Albertsons 1% Milkfat, dairy, GALLON jug</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Albertsons</td></tr>
<tr><th align='left'>Product</th><td>Albertsons 1% Milkfat</td></tr>
<tr><th align='left'>Variant</th><td>1% Milkfat</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>jug</td></tr>
<tr><th align='left'>Package</th><td>GALLON jug</td></tr>
<tr><th align='left'>Size</th><td>GALLON</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>S 4</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>GALLON</td></tr>
<tr><th align='left'>VLM Brand</th><td>Albertsons</td></tr>
<tr><th align='left'>VLM Variant</th><td>1% Milkfat</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>jug</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Albertsons</td></tr>
<tr><th align='left'>Resolver Variant</th><td>1% Milkfat</td></tr>
<tr><th align='left'>Resolver Family</th><td>dairy</td></tr>
<tr><th align='left'>Resolver Container</th><td>jug</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Albertsons&quot;,
  &quot;product_variant&quot;: &quot;1% Milkfat&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;jug&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;GALLON&quot;,
  &quot;best_catalog_match&quot;: &quot;milk&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;, &quot;shape&quot;],
  &quot;notes&quot;: &quot;The container is a jug of low-fat milk, as indicated by the label.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Albertsons&quot;,
  &quot;product_variant&quot;: &quot;1% Milkfat&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;jug&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;GALLON&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}</pre>
</details>

## 28. hires_20260208-212354_cup_0.95.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212354_cup_0.95.jpg" alt="hires_20260208-212354_cup_0.95.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212354_cup_0.95.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>nothing</td></tr>
<tr><th align='left'>Display Name</th><td>cup</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>cup</td></tr>
<tr><th align='left'>Package</th><td>cup</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>wr</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot90</td></tr>
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
      <p><strong>Resolver reasons</strong></p><ul><li>The image shows no visible branding or text that could indicate a specific product.</li></ul>
      
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
  &quot;notes&quot;: &quot;The image shows a single, cropped recyclable container with a circular shape and a smooth, white interior. The container appears to be a cup, possibly for hot beverages, given its design and the lack of any visible branding or text that could indicate a specific product family.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;cup&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [&quot;The image shows no visible branding or text that could indicate a specific product.&quot;]
}</pre>
</details>

## 29. hires_20260208-212357_bottle_0.98.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212357_bottle_0.98.jpg" alt="hires_20260208-212357_bottle_0.98.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212357_bottle_0.98.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>7-Eleven 1% Milkfat, dairy, 1 gallon jug</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>7-Eleven</td></tr>
<tr><th align='left'>Product</th><td>7-Eleven 1% Milkfat</td></tr>
<tr><th align='left'>Variant</th><td>1% Milkfat</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>jug</td></tr>
<tr><th align='left'>Package</th><td>1 gallon jug</td></tr>
<tr><th align='left'>Size</th><td>1 gallon</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>be SS 7 &amp; S</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>1 gallon</td></tr>
<tr><th align='left'>VLM Brand</th><td>7-Eleven</td></tr>
<tr><th align='left'>VLM Variant</th><td>1% Milkfat</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>jug</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>7-Eleven</td></tr>
<tr><th align='left'>Resolver Variant</th><td>1% Milkfat</td></tr>
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
  &quot;brand&quot;: &quot;7-Eleven&quot;,
  &quot;product_variant&quot;: &quot;1% Milkfat&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;jug&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;1 gallon&quot;,
  &quot;best_catalog_match&quot;: &quot;milk&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;, &quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a plastic jug with a green cap, labeled as 1% milkfat milk, which is a common dairy product.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;7-Eleven&quot;,
  &quot;product_variant&quot;: &quot;1% Milkfat&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;jug&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;1 gallon&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}</pre>
</details>

## 30. hires_20260208-212357_cup_0.96.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212357_cup_0.96.jpg" alt="hires_20260208-212357_cup_0.96.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212357_cup_0.96.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>weak</td></tr>
<tr><th align='left'>Display Name</th><td>white with lid</td></tr>
<tr><th align='left'>Confidence</th><td>1.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>cup</td></tr>
<tr><th align='left'>Package</th><td>white with lid</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>(aN</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot90</td></tr>
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
<tr><th align='left'>Resolver Confidence</th><td>1.0</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>OCR text is ambiguous and the vision model&#x27;s output is based on shape</li></ul>
      
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
  &quot;notes&quot;: &quot;The image shows a white, circular container with a lid, which is consistent with a cup. There is no visible branding or text to identify the product family or variant.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;cup&quot;,
  &quot;container_spec&quot;: &quot;white with lid&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 1.0,
  &quot;reasons&quot;: [&quot;OCR text is ambiguous and the vision model&#x27;s output is based on shape&quot;]
}</pre>
</details>

## 31. hires_20260208-212358_cup_0.95.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212358_cup_0.95.jpg" alt="hires_20260208-212358_cup_0.95.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212358_cup_0.95.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>nothing</td></tr>
<tr><th align='left'>Display Name</th><td>cup</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>cup</td></tr>
<tr><th align='left'>Package</th><td>cup</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>a</td></tr>
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
      <p><strong>Resolver reasons</strong></p><ul><li>No visible branding or text to identify the product family or variant</li></ul>
      
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
  &quot;notes&quot;: &quot;The image shows a white plastic cup with a lid, but there is no visible branding or text to identify the product family or variant.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;cup&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [&quot;No visible branding or text to identify the product family or variant&quot;]
}</pre>
</details>

## 32. hires_20260208-212400_bottle_0.97.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212400_bottle_0.97.jpg" alt="hires_20260208-212400_bottle_0.97.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212400_bottle_0.97.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>nothing</td></tr>
<tr><th align='left'>Display Name</th><td>ae jug</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>jug</td></tr>
<tr><th align='left'>Package</th><td>ae jug</td></tr>
<tr><th align='left'>Size</th><td>ae</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>ae</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>ae</td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td></td></tr>
<tr><th align='left'>VLM Container</th><td>jug</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td>jug</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>OCR text &#x27;ae&#x27; does not provide any useful information for identifying the product or brand.</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;jug&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a large plastic jug with a handle, which is commonly used for storing and dispensing liquids. The OCR text &#x27;ae&#x27; does not provide any useful information for identifying the product or brand.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;jug&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;ae&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [&quot;OCR text &#x27;ae&#x27; does not provide any useful information for identifying the product or brand.&quot;]
}</pre>
</details>

## 33. hires_20260208-212400_cup_0.96.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212400_cup_0.96.jpg" alt="hires_20260208-212400_cup_0.96.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212400_cup_0.96.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>nothing</td></tr>
<tr><th align='left'>Display Name</th><td>unknown beverage cup</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td>unknown beverage</td></tr>
<tr><th align='left'>Container</th><td>cup</td></tr>
<tr><th align='left'>Package</th><td>white plastic cup with a lid</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>ry</td></tr>
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
<tr><th align='left'>Resolver Family</th><td>unknown beverage</td></tr>
<tr><th align='left'>Resolver Container</th><td>cup</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>No visible branding</li></ul>
      
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
  &quot;notes&quot;: &quot;The image shows a white plastic cup with a lid, but there is no visible branding or text to identify the product family or variant.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> Based on the provided OCR text and vision model output, since there&#x27;s no visible branding in the image, we should set the `brand` field as an empty string. As for the other fields, since there is no specific information provided, I will fill them with the best guess based on context:

```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;Unknown Beverage&quot;,
  &quot;container_type&quot;: &quot;cup&quot;,
  &quot;container_spec&quot;: &quot;white plastic cup with a lid&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [&quot;No visible branding&quot;]
}
```</pre>
</details>

## 34. hires_20260208-212402_bottle_0.96.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212402_bottle_0.96.jpg" alt="hires_20260208-212402_bottle_0.96.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212402_bottle_0.96.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Pepsi Diet, soda, 12 fl oz bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Pepsi</td></tr>
<tr><th align='left'>Product</th><td>Pepsi Diet</td></tr>
<tr><th align='left'>Variant</th><td>Diet</td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>12 fl oz bottle</td></tr>
<tr><th align='left'>Size</th><td>12 fl oz</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>1 Bi</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot90</td></tr>
<tr><th align='left'>OCR Size</th><td>12 fl oz</td></tr>
<tr><th align='left'>VLM Brand</th><td>Pepsi</td></tr>
<tr><th align='left'>VLM Variant</th><td>Diet</td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Pepsi</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Diet</td></tr>
<tr><th align='left'>Resolver Family</th><td>soda</td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>OCR: &#x27;Bi&#x27; likely represents &#x27;1&#x27; in the number &#x27;12&#x27;, Vision Model found Pepsi logo and bottle shape.</li></ul>
      
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
  &quot;container_spec&quot;: &quot;recyclable&quot;,
  &quot;size_text&quot;: &quot;12 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;12 fl oz Diet Pepsi bottle&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a close-up of a Pepsi bottle with the Diet variant visible on the label.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Pepsi&quot;,
  &quot;product_variant&quot;: &quot;Diet&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;recyclable&quot;,
  &quot;size_text&quot;: &quot;12 fl oz&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: [&quot;OCR: &#x27;Bi&#x27; likely represents &#x27;1&#x27; in the number &#x27;12&#x27;, Vision Model found Pepsi logo and bottle shape.&quot;]
}</pre>
</details>

## 35. hires_20260208-212402_bottle_0.97.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212402_bottle_0.97.jpg" alt="hires_20260208-212402_bottle_0.97.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212402_bottle_0.97.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>nothing</td></tr>
<tr><th align='left'>Display Name</th><td>jug</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>jug</td></tr>
<tr><th align='left'>Package</th><td>jug</td></tr>
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
<tr><th align='left'>VLM Container</th><td>jug</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td>jug</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>Lack of branding</li>
<li>No specific product information</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;jug&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a large, translucent plastic jug with a handle and a cap, suggesting it is used for storing liquids. The lack of branding, product information, or specific size markings makes it difficult to determine the exact product family or variant.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;jug&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [&quot;Lack of branding&quot;, &quot;No specific product information&quot;]
}</pre>
</details>

## 36. hires_20260208-212402_cup_0.96.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212402_cup_0.96.jpg" alt="hires_20260208-212402_cup_0.96.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212402_cup_0.96.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>nothing</td></tr>
<tr><th align='left'>Display Name</th><td>cup</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>cup</td></tr>
<tr><th align='left'>Package</th><td>cup</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>we SY ie ak ex 4 or er</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot180</td></tr>
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
      <p><strong>Resolver reasons</strong></p><ul><li>OCR text does not contain a recognizable brand name</li>
<li>Image lacks visible branding</li></ul>
      
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
  &quot;notes&quot;: &quot;The image shows a white, circular container with a smooth, flat bottom, suggesting it is a cup. There is no visible branding or text that could provide further information about the product family or variant.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> Based on the provided OCR text and vision model output, there seems to be no clear brand identification. The OCR text does not contain any recognizable consumer-facing names for brands. Since the image also lacks visible branding, we cannot provide a definitive brand name.

Here&#x27;s the JSON response:

```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;cup&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [
    &quot;OCR text does not contain a recognizable brand name&quot;,
    &quot;Image lacks visible branding&quot;
  ]
}
```</pre>
</details>

## 37. hires_20260208-212404_bottle_0.97.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212404_bottle_0.97.jpg" alt="hires_20260208-212404_bottle_0.97.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212404_bottle_0.97.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>medium</td></tr>
<tr><th align='left'>Display Name</th><td>Pepsi, soda, bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Pepsi</td></tr>
<tr><th align='left'>Product</th><td>Pepsi</td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>bottle</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>Wee” ae AN</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Pepsi</td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Pepsi</td></tr>
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
  &quot;brand&quot;: &quot;Pepsi&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;Pepsi bottle&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a close-up of a Pepsi bottle with a visible logo and shape, indicating it is a soda bottle.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> Based on the provided OCR text and vision model output, here&#x27;s the normalized JSON response:

```json
{
  &quot;brand&quot;: &quot;Pepsi&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}
```

The brand name is &quot;Pepsi&quot; as detected by the vision model, and since it&#x27;s a well-known soda brand, no normalization is required in this case. The product variant remains empty because it was not specified in the provided data. The product family is &quot;soda&quot;, container type is &quot;bottle&quot;, and container spec is &quot;plastic&quot; as detected by the vision model. The size text field is left empty since it&#x27;s also not provided in the input data. The confidence level is 0.9, as stated in the vision model output. No reasons are mentioned because the information provided appears to be accurate.</pre>
</details>

## 38. hires_20260208-212404_cup_0.95.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212404_cup_0.95.jpg" alt="hires_20260208-212404_cup_0.95.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212404_cup_0.95.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>nothing</td></tr>
<tr><th align='left'>Display Name</th><td>empty</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>tub</td></tr>
<tr><th align='left'>Package</th><td>empty</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>Pe at et et cet, ae Betta</td></tr>
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
      <p><strong>Resolver reasons</strong></p><ul><li>No visible branding or text to confirm the product family or variant</li></ul>
      
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
  &quot;container_spec&quot;: &quot;empty&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a white, empty container with a smooth, rounded shape, suggesting it could be a tub or container for a product like lotion or cream. However, there is no visible branding or text to confirm the product family or variant.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> Based on the provided OCR text and vision model output, here&#x27;s the JSON response:

```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;empty&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [&quot;No visible branding or text to confirm the product family or variant&quot;]
}
```

The response reflects that there&#x27;s no clear brand identification in the given image data due to lack of visible branding or text.</pre>
</details>

## 39. hires_20260208-212406_bottle_0.89.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212406_bottle_0.89.jpg" alt="hires_20260208-212406_bottle_0.89.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212406_bottle_0.89.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>medium</td></tr>
<tr><th align='left'>Display Name</th><td>Pepsi, soda, bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Pepsi</td></tr>
<tr><th align='left'>Product</th><td>Pepsi</td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>bottle</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>EB Ns 2 T =</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot90</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Pepsi</td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Pepsi</td></tr>
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
  &quot;brand&quot;: &quot;Pepsi&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;Pepsi bottle&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a Pepsi bottle with a partially visible label and a white cap, indicating it is a soda bottle.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Pepsi&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}</pre>
</details>

## 40. hires_20260208-212406_bottle_0.97.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212406_bottle_0.97.jpg" alt="hires_20260208-212406_bottle_0.97.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212406_bottle_0.97.jpg</code></p>
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
        <tr><th align='left'>OCR</th><td>0 SS SS SS Li SS SS Ss : z ~N</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot180</td></tr>
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
      <p><strong>Resolver reasons</strong></p><ul><li>OCR text does not provide enough information to identify the brand or product details</li>
<li>Vision model notes suggest that the image shows a dairy product, but it&#x27;s not possible to confirm without more specific details</li></ul>
      
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
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a bottle with a nutrition facts label, suggesting it is a dairy product. However, the OCR text and shortlist candidates are not providing enough information to confidently identify the product family or variant.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> Based on the provided OCR text and vision model output, there isn&#x27;t enough clear information to identify the brand, product variant, product family, or size_text accurately. However, we can confirm that the container type is a bottle. Here is the JSON response:

```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [
    &quot;OCR text does not provide enough information to identify the brand or product details&quot;,
    &quot;Vision model notes suggest that the image shows a dairy product, but it&#x27;s not possible to confirm without more specific details&quot;
  ]
}
```</pre>
</details>

## 41. hires_20260208-212406_cup_0.96.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212406_cup_0.96.jpg" alt="hires_20260208-212406_cup_0.96.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212406_cup_0.96.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>nothing</td></tr>
<tr><th align='left'>Display Name</th><td>cup</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>cup</td></tr>
<tr><th align='left'>Package</th><td>cup</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>e wer C4 et ~S ‘oan, Ma</td></tr>
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
      <p><strong>Resolver reasons</strong></p><ul><li>No reliable brand or text readable</li></ul>
      
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
  &quot;notes&quot;: &quot;The image shows a white, cylindrical container with a smooth interior, suggesting it is a cup. There is no visible branding or text that can be reliably read to determine the product family or variant.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> Based on the provided OCR text and vision model output, the normalized JSON would look like this:

```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;cup&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [&quot;No reliable brand or text readable&quot;]
}
```

The output is based on the vision model&#x27;s conclusion that there&#x27;s no visible branding or text to determine the product family or variant. The brand field remains empty, and the reasons for this decision are provided in the &quot;reasons&quot; array.</pre>
</details>

## 42. hires_20260208-212408_bottle_0.88.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212408_bottle_0.88.jpg" alt="hires_20260208-212408_bottle_0.88.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212408_bottle_0.88.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Pepsi Diet, soda, 12 fl oz can</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Pepsi</td></tr>
<tr><th align='left'>Product</th><td>Pepsi Diet</td></tr>
<tr><th align='left'>Variant</th><td>Diet</td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>12 fl oz can</td></tr>
<tr><th align='left'>Size</th><td>12 fl oz</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>Bij we as ae : by</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot90</td></tr>
<tr><th align='left'>OCR Size</th><td>12 fl oz</td></tr>
<tr><th align='left'>VLM Brand</th><td>Pepsi</td></tr>
<tr><th align='left'>VLM Variant</th><td>Diet</td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Pepsi</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Diet</td></tr>
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
  &quot;brand&quot;: &quot;Pepsi&quot;,
  &quot;product_variant&quot;: &quot;Diet&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;12 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;12 oz Diet Pepsi can&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;shape&quot;],
  &quot;notes&quot;: &quot;The can is partially crushed, indicating it has been opened and possibly consumed.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Pepsi&quot;,
  &quot;product_variant&quot;: &quot;Diet&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;12 fl oz&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}</pre>
</details>

## 43. hires_20260208-212408_bottle_0.95.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212408_bottle_0.95.jpg" alt="hires_20260208-212408_bottle_0.95.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212408_bottle_0.95.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Pepsi Diet, soda, 1.5L bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Pepsi</td></tr>
<tr><th align='left'>Product</th><td>Pepsi Diet</td></tr>
<tr><th align='left'>Variant</th><td>Diet</td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>1.5L bottle</td></tr>
<tr><th align='left'>Size</th><td>1.5L</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>Hie al Ps</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>1.5L</td></tr>
<tr><th align='left'>VLM Brand</th><td>Pepsi</td></tr>
<tr><th align='left'>VLM Variant</th><td>Diet</td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Pepsi</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Diet</td></tr>
<tr><th align='left'>Resolver Family</th><td>soda</td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>logo</li>
<li>shape</li></ul>
      
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
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;1.5L&quot;,
  &quot;best_catalog_match&quot;: &quot;Diet Pepsi 1.5L Bottle&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a plastic bottle with the Pepsi logo and the word &#x27;Diet&#x27; visible, indicating it is a diet soda.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Pepsi&quot;,
  &quot;product_variant&quot;: &quot;Diet&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;1.5L&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: [&quot;logo&quot;, &quot;shape&quot;]
}</pre>
</details>

## 44. hires_20260208-212408_cup_0.97.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212408_cup_0.97.jpg" alt="hires_20260208-212408_cup_0.97.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212408_cup_0.97.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Whole Foods Market Plain Greek Yogurt, dairy, 32 OZ (2 LB) 907g tub</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Whole Foods Market</td></tr>
<tr><th align='left'>Product</th><td>Whole Foods Market Plain Greek Yogurt</td></tr>
<tr><th align='left'>Variant</th><td>Plain Greek Yogurt</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>tub</td></tr>
<tr><th align='left'>Package</th><td>32 OZ (2 LB) 907g tub</td></tr>
<tr><th align='left'>Size</th><td>32 OZ (2 LB) 907g</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>CRN W, Ge » 8Q yy Mp Urs g Poe</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>32 OZ (2 LB) 907g</td></tr>
<tr><th align='left'>VLM Brand</th><td>365 Whole Foods Market</td></tr>
<tr><th align='left'>VLM Variant</th><td>Plain</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>tub</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Whole Foods Market</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Plain Greek Yogurt</td></tr>
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
  &quot;brand&quot;: &quot;365 Whole Foods Market&quot;,
  &quot;product_variant&quot;: &quot;Plain&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;32 OZ (2 LB) 907g&quot;,
  &quot;size_text&quot;: &quot;32 OZ (2 LB) 907g&quot;,
  &quot;best_catalog_match&quot;: &quot;yogurt&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The container is a tub, which is commonly used for yogurt. The text &#x27;Greek Yogurt&#x27; and &#x27;Plain&#x27; confirms the product type and variant. The size is clearly marked as 32 OZ (2 LB) 907g.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Whole Foods Market&quot;,
  &quot;product_variant&quot;: &quot;Plain Greek Yogurt&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;32 OZ (2 LB) 907g&quot;,
  &quot;size_text&quot;: &quot;32 OZ (2 LB) 907g&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}</pre>
</details>

## 45. hires_20260208-212412_bottle_0.97.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212412_bottle_0.97.jpg" alt="hires_20260208-212412_bottle_0.97.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212412_bottle_0.97.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>nothing</td></tr>
<tr><th align='left'>Display Name</th><td>4 rr jug</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>jug</td></tr>
<tr><th align='left'>Package</th><td>4 rr jug</td></tr>
<tr><th align='left'>Size</th><td>4 rr</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>- 4 rr</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot270</td></tr>
<tr><th align='left'>OCR Size</th><td>4 rr</td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td></td></tr>
<tr><th align='left'>VLM Container</th><td>jug</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td>jug</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>OCR text is the only source of information but does not provide a specific brand or product variant</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;jug&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a white, translucent jug with a cap, which is commonly used for storing liquids like water or milk. The OCR text &#x27;4 rr&#x27; does not provide any additional information to identify the brand or product variant.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;jug&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;4 rr&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [&quot;OCR text is the only source of information but does not provide a specific brand or product variant&quot;]
}</pre>
</details>

## 46. hires_20260208-212412_thermoform_0.96.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212412_thermoform_0.96.jpg" alt="hires_20260208-212412_thermoform_0.96.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212412_thermoform_0.96.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Pete &amp; Gerry&#x27;s Organic Pasture Eggs, dairy, 12 Fresh Brown Eggs clamshell</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Pete &amp; Gerry&#x27;s</td></tr>
<tr><th align='left'>Product</th><td>Pete &amp; Gerry&#x27;s Organic Pasture Eggs</td></tr>
<tr><th align='left'>Variant</th><td>Organic Pasture Eggs</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>clamshell</td></tr>
<tr><th align='left'>Package</th><td>12 Fresh Brown Eggs clamshell</td></tr>
<tr><th align='left'>Size</th><td>12 Fresh Brown Eggs</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>awe ORG ronnie’ Fee at hei ; MW © Wy rates iy a LT RL prays bry RA No cr Lire</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot90</td></tr>
<tr><th align='left'>OCR Size</th><td>12 Fresh Brown Eggs</td></tr>
<tr><th align='left'>VLM Brand</th><td>Pete &amp; Gerry&#x27;s</td></tr>
<tr><th align='left'>VLM Variant</th><td>Organic Pasture Eggs</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>clamshell</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Pete &amp; Gerry&#x27;s</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Organic Pasture Eggs</td></tr>
<tr><th align='left'>Resolver Family</th><td>dairy</td></tr>
<tr><th align='left'>Resolver Container</th><td>clamshell</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Pete &amp; Gerry&#x27;s&quot;,
  &quot;product_variant&quot;: &quot;Organic Pasture Eggs&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;clamshell&quot;,
  &quot;container_spec&quot;: &quot;egg carton&quot;,
  &quot;size_text&quot;: &quot;12 Fresh Brown Eggs&quot;,
  &quot;best_catalog_match&quot;: &quot;egg carton&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a package of organic eggs with a focus on the branding and product details.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Pete &amp; Gerry&#x27;s&quot;,
  &quot;product_variant&quot;: &quot;Organic Pasture Eggs&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;clamshell&quot;,
  &quot;container_spec&quot;: &quot;egg carton&quot;,
  &quot;size_text&quot;: &quot;12 Fresh Brown Eggs&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}</pre>
</details>

## 47. hires_20260208-212414_bottle_0.98.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212414_bottle_0.98.jpg" alt="hires_20260208-212414_bottle_0.98.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212414_bottle_0.98.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>nothing</td></tr>
<tr><th align='left'>Display Name</th><td>white, translucent, with a flip-top cap</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>jug</td></tr>
<tr><th align='left'>Package</th><td>white, translucent, with a flip-top cap</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>ts — 7 = Jz aay,</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot180</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td></td></tr>
<tr><th align='left'>VLM Container</th><td>jug</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td>jug</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>Lack of branding or text</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;jug&quot;,
  &quot;container_spec&quot;: &quot;white, translucent, with a flip-top cap&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a close-up of a white, translucent jug with a flip-top cap, which is commonly used for storing liquids like water or milk. The lack of branding or text makes it difficult to determine the specific product family or variant.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;jug&quot;,
  &quot;container_spec&quot;: &quot;white, translucent, with a flip-top cap&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [&quot;Lack of branding or text&quot;]
}</pre>
</details>

## 48. hires_20260208-212414_can_0.89.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212414_can_0.89.jpg" alt="hires_20260208-212414_can_0.89.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212414_can_0.89.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Coca-Cola Zero Sugar, soda, can</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Product</th><td>Coca-Cola Zero Sugar</td></tr>
<tr><th align='left'>Variant</th><td>Zero Sugar</td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>can</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>fi mc be , iy Tn ~ &amp;</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot90</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>VLM Variant</th><td>Zero Sugar</td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Zero Sugar</td></tr>
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
  &quot;product_variant&quot;: &quot;Zero Sugar&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;recyclable&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;Coca-Cola Zero Sugar can&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a red can with the Coca-Cola logo and the words &#x27;Zero Sugar&#x27; on it, featuring a Santa Claus illustration, which is a seasonal design.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> Based on the provided OCR text and vision model output, here&#x27;s the normalized JSON:

```json
{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;Zero Sugar&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;recyclable&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}
```

In this case, the OCR text is not clear enough to provide additional details like `size_text`. However, the vision model output already contains the necessary information. The normalization of brand names follows the provided examples, with no need for further adjustments.</pre>
</details>

## 49. hires_20260208-212414_thermoform_0.97.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212414_thermoform_0.97.jpg" alt="hires_20260208-212414_thermoform_0.97.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212414_thermoform_0.97.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Pete &amp; Gerry&#x27;s Organic, dairy, 12 clamshell</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Pete &amp; Gerry&#x27;s</td></tr>
<tr><th align='left'>Product</th><td>Pete &amp; Gerry&#x27;s Organic</td></tr>
<tr><th align='left'>Variant</th><td>Organic</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>clamshell</td></tr>
<tr><th align='left'>Package</th><td>12 clamshell</td></tr>
<tr><th align='left'>Size</th><td>12</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>ws ORGAN, £0 Cbg. Mp, a — FF es 4 ar) FR =i We 7h leg Pee, CM U4 Wily Neo Cnn aed _—</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot90</td></tr>
<tr><th align='left'>OCR Size</th><td>12</td></tr>
<tr><th align='left'>VLM Brand</th><td>Pete &amp; Gerry&#x27;s</td></tr>
<tr><th align='left'>VLM Variant</th><td>Organic</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>clamshell</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Pete &amp; Gerry&#x27;s</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Organic</td></tr>
<tr><th align='left'>Resolver Family</th><td>dairy</td></tr>
<tr><th align='left'>Resolver Container</th><td>clamshell</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Pete &amp; Gerry&#x27;s&quot;,
  &quot;product_variant&quot;: &quot;Organic&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;clamshell&quot;,
  &quot;container_spec&quot;: &quot;egg&quot;,
  &quot;size_text&quot;: &quot;12&quot;,
  &quot;best_catalog_match&quot;: &quot;egg&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a package of organic eggs with a clamshell-style container.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Pete &amp; Gerry&#x27;s&quot;,
  &quot;product_variant&quot;: &quot;Organic&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;clamshell&quot;,
  &quot;container_spec&quot;: &quot;egg&quot;,
  &quot;size_text&quot;: &quot;12&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}</pre>
</details>

## 50. hires_20260208-212416_bottle_0.95.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212416_bottle_0.95.jpg" alt="hires_20260208-212416_bottle_0.95.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212416_bottle_0.95.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>nothing</td></tr>
<tr><th align='left'>Display Name</th><td>dairy bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>bottle</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>&amp; = Sz » GB a - oo 2 \ow 39% Son! sn)</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot90</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td>dairy</td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>OCR text is unrelated and possibly a placeholder or error.</li>
<li>Vision model does not detect a specific brand</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;, &quot;text&quot;],
  &quot;notes&quot;: &quot;The image shows a bottle with a nutrition facts label, which is typical for dairy products. The OCR text appears to be unrelated and possibly a placeholder or error.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [&quot;OCR text is unrelated and possibly a placeholder or error.&quot;, &quot;Vision model does not detect a specific brand&quot;]
}</pre>
</details>

## 51. hires_20260208-212416_can_0.82.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212416_can_0.82.jpg" alt="hires_20260208-212416_can_0.82.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212416_can_0.82.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Coca-Cola Zero Sugar, soda, 6 4 can</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Product</th><td>Coca-Cola Zero Sugar</td></tr>
<tr><th align='left'>Variant</th><td>Zero Sugar</td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>6 4 can</td></tr>
<tr><th align='left'>Size</th><td>6 4</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>Taye SVS, ! 6 4</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot90</td></tr>
<tr><th align='left'>OCR Size</th><td>6 4</td></tr>
<tr><th align='left'>VLM Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>VLM Variant</th><td>Zero Sugar</td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Zero Sugar</td></tr>
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
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;Zero Sugar&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;recyclable&quot;,
  &quot;size_text&quot;: &quot;6 4&quot;,
  &quot;best_catalog_match&quot;: &quot;Coca-Cola Zero Sugar can&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a red can with the Coca-Cola logo and the text &#x27;ZERO SUGAR&#x27;. The size &#x27;6 4&#x27; is partially visible, which might indicate a 6-pack of 4-ounce cans.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;Zero Sugar&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;recyclable&quot;,
  &quot;size_text&quot;: &quot;6 4&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}</pre>
</details>

## 52. hires_20260208-212416_lid_0.97.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212416_lid_0.97.jpg" alt="hires_20260208-212416_lid_0.97.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212416_lid_0.97.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>nothing</td></tr>
<tr><th align='left'>Display Name</th><td>lid</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>lid</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>rT)</td></tr>
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
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>No visible branding or text to identify the product family or variant</li></ul>
      
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
  &quot;container_spec&quot;: &quot;lid&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a close-up of a bottle lid, likely from a beverage container, but no branding or text is visible to identify the product family or variant.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;lid&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [&quot;No visible branding or text to identify the product family or variant&quot;]
}</pre>
</details>

## 53. hires_20260208-212416_paper_0.98.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212416_paper_0.98.jpg" alt="hires_20260208-212416_paper_0.98.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212416_paper_0.98.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Kraft Unsalted, dairy, NET WT 16 OZ (1 LB) 453 G squeeze bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Kraft</td></tr>
<tr><th align='left'>Product</th><td>Kraft Unsalted</td></tr>
<tr><th align='left'>Variant</th><td>Unsalted</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>squeeze bottle</td></tr>
<tr><th align='left'>Package</th><td>NET WT 16 OZ (1 LB) 453 G squeeze bottle</td></tr>
<tr><th align='left'>Size</th><td>NET WT 16 OZ (1 LB) 453 G</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>Yy WG mG &gt; con So ay fg &lt;a Uf Gj a, *</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot180</td></tr>
<tr><th align='left'>OCR Size</th><td>NET WT 16 OZ (1 LB) 453 G</td></tr>
<tr><th align='left'>VLM Brand</th><td>Kraft</td></tr>
<tr><th align='left'>VLM Variant</th><td>Unsalted</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>squeeze bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Kraft</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Unsalted</td></tr>
<tr><th align='left'>Resolver Family</th><td>dairy</td></tr>
<tr><th align='left'>Resolver Container</th><td>squeeze bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Kraft&quot;,
  &quot;product_variant&quot;: &quot;Unsalted&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;squeeze bottle&quot;,
  &quot;container_spec&quot;: &quot;4 STICKS&quot;,
  &quot;size_text&quot;: &quot;NET WT 16 OZ (1 LB) 453 G&quot;,
  &quot;best_catalog_match&quot;: &quot;Sweet Cream Butter&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a package of butter sticks, which is a dairy product. The packaging indicates it is unsalted and contains 4 sticks, with a net weight of 16 ounces (1 pound) or 453 grams.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Kraft&quot;,
  &quot;product_variant&quot;: &quot;Unsalted&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;squeeze bottle&quot;,
  &quot;container_spec&quot;: &quot;4 STICKS&quot;,
  &quot;size_text&quot;: &quot;NET WT 16 OZ (1 LB) 453 G&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}</pre>
</details>

## 54. hires_20260208-212418_bottle_0.95.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212418_bottle_0.95.jpg" alt="hires_20260208-212418_bottle_0.95.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212418_bottle_0.95.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>nothing</td></tr>
<tr><th align='left'>Display Name</th><td>dairy bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>bottle</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>% ae ? 410. Se z sa ose S23</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot270</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td>dairy</td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>The OCR text is noisy and does not provide clear information to identify the brand or product variant.</li>
<li>The raw vision model output suggests the image shows a dairy bottle based on its shape and nutrition facts label.</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;, &quot;text&quot;],
  &quot;notes&quot;: &quot;The image shows a bottle with a nutrition facts label, which is typical for dairy products. The OCR text appears to be partially obscured and does not provide clear information to identify the brand or product variant.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [
    &quot;The OCR text is noisy and does not provide clear information to identify the brand or product variant.&quot;,
    &quot;The raw vision model output suggests the image shows a dairy bottle based on its shape and nutrition facts label.&quot;
  ]
}</pre>
</details>

## 55. hires_20260208-212418_can_0.88.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212418_can_0.88.jpg" alt="hires_20260208-212418_can_0.88.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212418_can_0.88.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Coca-Cola Zero Sugar, soda, 12 fl oz can</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Product</th><td>Coca-Cola Zero Sugar</td></tr>
<tr><th align='left'>Variant</th><td>Zero Sugar</td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>12 fl oz can</td></tr>
<tr><th align='left'>Size</th><td>12 fl oz</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>My PP LZ PP IG bat AN</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot270</td></tr>
<tr><th align='left'>OCR Size</th><td>12 fl oz</td></tr>
<tr><th align='left'>VLM Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>VLM Variant</th><td>Zero Sugar</td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Zero Sugar</td></tr>
<tr><th align='left'>Resolver Family</th><td>soda</td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>logo</li>
<li>OCR</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;Zero Sugar&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;recyclable&quot;,
  &quot;size_text&quot;: &quot;12 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;Coca-Cola Zero Sugar 12 fl oz can&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a red can with a Santa Claus illustration, which is a common design for Coca-Cola during the holiday season. The text &#x27;Zero Sugar&#x27; is clearly visible, indicating the product variant.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> Based on the given OCR text and the raw vision model output, here&#x27;s the normalized JSON:

```json
{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;Zero Sugar&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;recyclable&quot;,
  &quot;size_text&quot;: &quot;12 fl oz&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: [&quot;logo&quot;, &quot;OCR&quot;]
}
```

This JSON object contains the brand name, product variant, product family, container type, container spec, size text, confidence level, and reasons for the extracted information. The `reasons` field indicates that the data comes from both the logo and OCR output.</pre>
</details>

## 56. hires_20260208-212418_lid_0.82.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212418_lid_0.82.jpg" alt="hires_20260208-212418_lid_0.82.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212418_lid_0.82.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>nothing</td></tr>
<tr><th align='left'>Display Name</th><td>white plastic</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>white plastic</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>a</td></tr>
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
      <p><strong>Resolver reasons</strong></p><ul><li>No visible branding or text</li></ul>
      
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
  &quot;notes&quot;: &quot;The image shows a close-up of a white plastic container with a circular shape, which is typical for a bottle. However, there is no visible branding or text to confirm the product family or variant.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;white plastic&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [&quot;No visible branding or text&quot;]
}</pre>
</details>

## 57. hires_20260208-212418_paper_0.98.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212418_paper_0.98.jpg" alt="hires_20260208-212418_paper_0.98.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212418_paper_0.98.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Kraft Unsalted, dairy, 16 oz (1 lb 5.5 oz) squeeze bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Kraft</td></tr>
<tr><th align='left'>Product</th><td>Kraft Unsalted</td></tr>
<tr><th align='left'>Variant</th><td>Unsalted</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>squeeze bottle</td></tr>
<tr><th align='left'>Package</th><td>16 oz (1 lb 5.5 oz) squeeze bottle</td></tr>
<tr><th align='left'>Size</th><td>16 oz (1 lb 5.5 oz)</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>(Ss x7 SU @. ©, WO &lt; iy Me Lp Rs) owe Pa ZZ</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot180</td></tr>
<tr><th align='left'>OCR Size</th><td>16 oz (1 lb 5.5 oz)</td></tr>
<tr><th align='left'>VLM Brand</th><td>Kraft</td></tr>
<tr><th align='left'>VLM Variant</th><td>Unsalted</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>squeeze bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Kraft</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Unsalted</td></tr>
<tr><th align='left'>Resolver Family</th><td>dairy</td></tr>
<tr><th align='left'>Resolver Container</th><td>squeeze bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Kraft&quot;,
  &quot;product_variant&quot;: &quot;Unsalted&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;squeeze bottle&quot;,
  &quot;container_spec&quot;: &quot;4 Sticks&quot;,
  &quot;size_text&quot;: &quot;16 oz (1 lb 5.5 oz)&quot;,
  &quot;best_catalog_match&quot;: &quot;Sweet Cream Butter&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a package of butter sticks, with the brand name &#x27;Kraft&#x27; and the product variant &#x27;Unsalted&#x27; clearly visible. The container type is a squeeze bottle, and the size is 16 ounces.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> Based on the provided OCR text and vision model output, I will normalize the data according to the given schema. However, please note that as a text-based AI model, I don&#x27;t have the ability to visually interpret images or recognize logos. I will base my response on the information provided in the vision model output.

Here is the normalized JSON:

```json
{
  &quot;brand&quot;: &quot;Kraft&quot;,
  &quot;product_variant&quot;: &quot;Unsalted&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;squeeze bottle&quot;,
  &quot;container_spec&quot;: &quot;4 Sticks&quot;,
  &quot;size_text&quot;: &quot;16 oz (1 lb 5.5 oz)&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}
```
In this case, the brand is clearly identified as &quot;Kraft&quot; in the vision model output, so I have kept it as it is. The product variant, container type, and container spec are also provided in the vision model output and remain unchanged. The size text is also taken directly from the OCR output. Since no generic category words are present, the &quot;brand&quot; field does not violate the given rule. The confidence level is 0.8 as per the vision model output. There are no reasons for any changes or corrections in this case.</pre>
</details>

## 58. hires_20260208-212420_bottle_0.95.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212420_bottle_0.95.jpg" alt="hires_20260208-212420_bottle_0.95.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212420_bottle_0.95.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>weak</td></tr>
<tr><th align='left'>Display Name</th><td>bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.5</td></tr>
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
        <tr><th align='left'>OCR</th><td>ly aS igion ates 410 \e os oa Se Be BE</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot270</td></tr>
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
<tr><th align='left'>Resolver Confidence</th><td>0.5</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>The OCR text is not clear and does not provide enough information to identify the brand, product variant, or product family.</li>
<li>However, the raw vision model output indicates that the container type is a bottle.</li></ul>
      
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
  &quot;evidence&quot;: [&quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a bottle with a nutrition facts label, but the OCR text is not clear and does not provide enough information to identify the brand, product variant, or product family. The container type is identified as a bottle.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> Based on the given OCR text and raw vision model output, it seems there isn&#x27;t enough information to accurately determine the brand, product variant, or product family. However, since the container type can be identified, I will provide an example of how the output could look like for such a case:

```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.5,
  &quot;reasons&quot;: [
    &quot;The OCR text is not clear and does not provide enough information to identify the brand, product variant, or product family.&quot;,
    &quot;However, the raw vision model output indicates that the container type is a bottle.&quot;
  ]
}
```</pre>
</details>

## 59. hires_20260208-212420_can_0.90.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212420_can_0.90.jpg" alt="hires_20260208-212420_can_0.90.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212420_can_0.90.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Coca-Cola Zero Sugar, soda, single</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Product</th><td>Coca-Cola Zero Sugar</td></tr>
<tr><th align='left'>Variant</th><td>Zero Sugar</td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>single</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>Zane aes ye ic Atae { |</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot180</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>VLM Variant</th><td>Zero Sugar</td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Zero Sugar</td></tr>
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
  &quot;product_variant&quot;: &quot;Zero Sugar&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;single&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;Coca-Cola Zero Sugar can&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a red can with the Coca-Cola logo and the text &#x27;Zero Sugar&#x27;, indicating it is a Coca-Cola Zero Sugar beverage.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> Based on the OCR text and raw vision model output, I will normalize the data as follows:

```json
{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;Zero Sugar&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;single&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}
```

In this case, the OCR text is not providing additional information that wasn&#x27;t already detected by the vision model, so there are no reasons listed. The vision model has accurately identified the brand, product variant, and container type, and there&#x27;s no need to hallucinate any other details based on the given input.</pre>
</details>

## 60. hires_20260208-212420_paper_0.98.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212420_paper_0.98.jpg" alt="hires_20260208-212420_paper_0.98.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212420_paper_0.98.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>USDA UNSALTED, dairy, NET WT 16 OZ (1 LB) 565 G squeeze bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>USDA</td></tr>
<tr><th align='left'>Product</th><td>USDA UNSALTED</td></tr>
<tr><th align='left'>Variant</th><td>UNSALTED</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>squeeze bottle</td></tr>
<tr><th align='left'>Package</th><td>NET WT 16 OZ (1 LB) 565 G squeeze bottle</td></tr>
<tr><th align='left'>Size</th><td>NET WT 16 OZ (1 LB) 565 G</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>£7 430 Bo ow te tg * ~~ ep Uy</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot180</td></tr>
<tr><th align='left'>OCR Size</th><td>NET WT 16 OZ (1 LB) 565 G</td></tr>
<tr><th align='left'>VLM Brand</th><td>USDA</td></tr>
<tr><th align='left'>VLM Variant</th><td>UNSALTED</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>squeeze bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>USDA</td></tr>
<tr><th align='left'>Resolver Variant</th><td>UNSALTED</td></tr>
<tr><th align='left'>Resolver Family</th><td>dairy</td></tr>
<tr><th align='left'>Resolver Container</th><td>squeeze bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;USDA&quot;,
  &quot;product_variant&quot;: &quot;UNSALTED&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;squeeze bottle&quot;,
  &quot;container_spec&quot;: &quot;sweet cream butter&quot;,
  &quot;size_text&quot;: &quot;NET WT 16 OZ (1 LB) 565 G&quot;,
  &quot;best_catalog_match&quot;: &quot;sweet cream butter&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a package of unsalted sweet cream butter, which is a dairy product. The packaging includes a USDA logo, indicating it is a product regulated by the United States Department of Agriculture. The text on the package provides the product variant and size.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;USDA&quot;,
  &quot;product_variant&quot;: &quot;UNSALTED&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;squeeze bottle&quot;,
  &quot;container_spec&quot;: &quot;sweet cream butter&quot;,
  &quot;size_text&quot;: &quot;NET WT 16 OZ (1 LB) 565 G&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}</pre>
</details>

## 61. hires_20260208-212422_bottle_0.97.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212422_bottle_0.97.jpg" alt="hires_20260208-212422_bottle_0.97.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212422_bottle_0.97.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>weak</td></tr>
<tr><th align='left'>Display Name</th><td>Mes Cs, dairy, bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.5</td></tr>
<tr><th align='left'>Brand</th><td>Mes Cs</td></tr>
<tr><th align='left'>Product</th><td>Mes Cs</td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>bottle</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>Mes Cs {nowt mon 410 ai a a 24 A -</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot270</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td></td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Mes Cs</td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td>dairy</td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.5</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>OCR text recognition</li>
<li>Vision model output shape</li></ul>
      
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
  &quot;evidence&quot;: [&quot;shape&quot;, &quot;text&quot;],
  &quot;notes&quot;: &quot;The image shows a bottle with a nutrition facts label, suggesting it is a dairy product. However, the OCR text and shortlist candidates are not providing enough information to confidently identify the brand, product variant, or product family.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Mes Cs&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.5,
  &quot;reasons&quot;: [&quot;OCR text recognition&quot;, &quot;Vision model output shape&quot;]
}</pre>
</details>

## 62. hires_20260208-212422_can_0.93.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212422_can_0.93.jpg" alt="hires_20260208-212422_can_0.93.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212422_can_0.93.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Coca-Cola Sugar, soda, 5€ can</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Product</th><td>Coca-Cola Sugar</td></tr>
<tr><th align='left'>Variant</th><td>Sugar</td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>5€ can</td></tr>
<tr><th align='left'>Size</th><td>5€</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>TN Ny AY 5€ a Ee Ny</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot180</td></tr>
<tr><th align='left'>OCR Size</th><td>5€</td></tr>
<tr><th align='left'>VLM Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>VLM Variant</th><td>Sugar</td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Sugar</td></tr>
<tr><th align='left'>Resolver Family</th><td>soda</td></tr>
<tr><th align='left'>Resolver Container</th><td>can</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>OCR text &#x27;TN Ny AY&#x27; did not correspond to any specific information</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;Sugar&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;red&quot;,
  &quot;size_text&quot;: &quot;5€&quot;,
  &quot;best_catalog_match&quot;: &quot;Coca-Cola can&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a red can with the Coca-Cola logo and the word &#x27;Sugar&#x27; visible, indicating it is a Coca-Cola product. The &#x27;5€&#x27; text suggests it might be a limited edition or promotional item.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;Sugar&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;red&quot;,
  &quot;size_text&quot;: &quot;5€&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: [&quot;OCR text &#x27;TN Ny AY&#x27; did not correspond to any specific information&quot;]
}</pre>
</details>

## 63. hires_20260208-212424_can_0.94.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212424_can_0.94.jpg" alt="hires_20260208-212424_can_0.94.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212424_can_0.94.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Coca-Cola Zero Sugar, soda, 12 fl oz can</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Product</th><td>Coca-Cola Zero Sugar</td></tr>
<tr><th align='left'>Variant</th><td>Zero Sugar</td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>12 fl oz can</td></tr>
<tr><th align='left'>Size</th><td>12 fl oz</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>\S tO” (ora er es</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot90</td></tr>
<tr><th align='left'>OCR Size</th><td>12 fl oz</td></tr>
<tr><th align='left'>VLM Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>VLM Variant</th><td>Zero Sugar</td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Zero Sugar</td></tr>
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
  &quot;product_variant&quot;: &quot;Zero Sugar&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;red&quot;,
  &quot;size_text&quot;: &quot;12 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;Coca-Cola Zero Sugar 12 fl oz can&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a red can with a Santa Claus illustration, which is a common design for Coca-Cola during the holiday season. The text &#x27;Zero Sugar&#x27; is clearly visible, indicating the product variant.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;Zero Sugar&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;red&quot;,
  &quot;size_text&quot;: &quot;12 fl oz&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}</pre>
</details>

## 64. hires_20260208-212424_cup_0.97.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212424_cup_0.97.jpg" alt="hires_20260208-212424_cup_0.97.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212424_cup_0.97.jpg</code></p>
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
        <tr><th align='left'>OCR</th><td>oe Se &amp; a &amp; a : s $ s ¢ s a g s x s = s s 3 Ss s s s s s Ss Ss o ss e 8 s 3s * s oe &lt; S x ws c s * Ss s oo s s x gs s SS SA &gt; ge</td></tr>
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
      <p><strong>Resolver reasons</strong></p><ul><li>The OCR text does not provide any identifiable information about the product or brand.</li>
<li>The raw vision model output suggests that the image shows a cylindrical container, but the details are unclear.</li></ul>
      
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
  &quot;notes&quot;: &quot;The image shows a cylindrical container with text printed on it, which is typical for a tub or jar. However, the OCR text is not clear and does not provide any identifiable information about the product or brand.&quot;
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
  &quot;reasons&quot;: [
    &quot;The OCR text does not provide any identifiable information about the product or brand.&quot;,
    &quot;The raw vision model output suggests that the image shows a cylindrical container, but the details are unclear.&quot;
  ]
}</pre>
</details>

## 65. hires_20260208-212426_can_0.93.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212426_can_0.93.jpg" alt="hires_20260208-212426_can_0.93.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212426_can_0.93.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Coca-Cola Zero Sugar, soda, 12 fl oz can</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Product</th><td>Coca-Cola Zero Sugar</td></tr>
<tr><th align='left'>Variant</th><td>Zero Sugar</td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>can</td></tr>
<tr><th align='left'>Package</th><td>12 fl oz can</td></tr>
<tr><th align='left'>Size</th><td>12 fl oz</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>LA PF’ ie 2 a, % ze Cusp t tye a le</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot90</td></tr>
<tr><th align='left'>OCR Size</th><td>12 fl oz</td></tr>
<tr><th align='left'>VLM Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>VLM Variant</th><td>Zero Sugar</td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>can</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Coca-Cola</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Zero Sugar</td></tr>
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
  &quot;product_variant&quot;: &quot;Zero Sugar&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;12 fl oz&quot;,
  &quot;best_catalog_match&quot;: &quot;Coca-Cola Zero Sugar 12 fl oz can&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a red can with the Coca-Cola logo and the text &#x27;Zero Sugar&#x27; visible, indicating it is a Coca-Cola Zero Sugar soda can.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> Based on the provided OCR text and the vision model output, I will normalize the data as follows:

```json
{
  &quot;brand&quot;: &quot;Coca-Cola&quot;,
  &quot;product_variant&quot;: &quot;Zero Sugar&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;can&quot;,
  &quot;container_spec&quot;: &quot;aluminum&quot;,
  &quot;size_text&quot;: &quot;12 fl oz&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}
```

Since the vision model output already matches the OCR text and provides a high confidence level, no further normalization is required in this case.</pre>
</details>

## 66. hires_20260208-212426_cup_0.97.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212426_cup_0.97.jpg" alt="hires_20260208-212426_cup_0.97.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212426_cup_0.97.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>nothing</td></tr>
<tr><th align='left'>Display Name</th><td>cup</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>cup</td></tr>
<tr><th align='left'>Package</th><td>cup</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>3% &amp; % Ny %, a ~ ‘eh be “os ww A</td></tr>
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
      <p><strong>Resolver reasons</strong></p><ul><li>OCR text is not clear</li></ul>
      
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
  &quot;container_spec&quot;: &quot;recyclable&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a close-up of a recyclable container with text and a logo, but the OCR text is not clear and the shortlist candidates are not provided.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> Based on the provided OCR text and vision model output, I will provide a normalized JSON response. Since the OCR text is not clear, I&#x27;ll assume an empty `brand`, `product_variant`, `size_text`, and `best_catalog_match`. The raw vision model output suggests that the container type is &#x27;cup&#x27;, and it is recyclable.

```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;cup&quot;,
  &quot;container_spec&quot;: &quot;recyclable&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [
    &quot;OCR text is not clear&quot;
  ]
}
```</pre>
</details>

## 67. hires_20260208-212426_cup_0.98.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212426_cup_0.98.jpg" alt="hires_20260208-212426_cup_0.98.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212426_cup_0.98.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Daisy Low Fat, dairy, Only Milk, Cream &amp; Salt tub</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Daisy</td></tr>
<tr><th align='left'>Product</th><td>Daisy Low Fat</td></tr>
<tr><th align='left'>Variant</th><td>Low Fat</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>tub</td></tr>
<tr><th align='left'>Package</th><td>Only Milk, Cream &amp; Salt tub</td></tr>
<tr><th align='left'>Size</th><td>Only Milk, Cream &amp; Salt</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>“ ss — Se. We a\S Pressey baal Prey Medea or: $/= Pesan (NT mor Ff),</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot90</td></tr>
<tr><th align='left'>OCR Size</th><td>Only Milk, Cream &amp; Salt</td></tr>
<tr><th align='left'>VLM Brand</th><td>Daisy</td></tr>
<tr><th align='left'>VLM Variant</th><td>Low Fat</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>tub</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Daisy</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Low Fat</td></tr>
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
  &quot;product_variant&quot;: &quot;Low Fat&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;13g protein&quot;,
  &quot;size_text&quot;: &quot;Only Milk, Cream &amp; Salt&quot;,
  &quot;best_catalog_match&quot;: &quot;cottage cheese&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a tub of low-fat cottage cheese with live and active cultures.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Daisy&quot;,
  &quot;product_variant&quot;: &quot;Low Fat&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;13g protein&quot;,
  &quot;size_text&quot;: &quot;Only Milk, Cream &amp; Salt&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}</pre>
</details>

## 68. hires_20260208-212428_bottle_0.91.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212428_bottle_0.91.jpg" alt="hires_20260208-212428_bottle_0.91.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212428_bottle_0.91.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Danone Activia 3.1 FL OZ (93mL), dairy, 3.1 FL OZ (93mL) bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Danone</td></tr>
<tr><th align='left'>Product</th><td>Danone Activia 3.1 FL OZ (93mL)</td></tr>
<tr><th align='left'>Variant</th><td>Activia 3.1 FL OZ (93mL)</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>3.1 FL OZ (93mL) bottle</td></tr>
<tr><th align='left'>Size</th><td>3.1 FL OZ (93mL)</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>we &#x27; . ui) comtuns to t expngpncenalo CoMrAINS: preset 31 34 Foz (93, mi) oe i</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>3.1 FL OZ (93mL)</td></tr>
<tr><th align='left'>VLM Brand</th><td>Activia</td></tr>
<tr><th align='left'>VLM Variant</th><td>3.1 FL OZ (93mL)</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Danone</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Activia 3.1 FL OZ (93mL)</td></tr>
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
  &quot;brand&quot;: &quot;Activia&quot;,
  &quot;product_variant&quot;: &quot;3.1 FL OZ (93mL)&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;3.1 FL OZ (93mL)&quot;,
  &quot;size_text&quot;: &quot;3.1 FL OZ (93mL)&quot;,
  &quot;best_catalog_match&quot;: &quot;yogurt&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The container is a bottle with a label indicating it contains milk and is a product of Danone, a well-known dairy brand. The size is clearly marked as 3.1 FL OZ (93mL). The presence of the Danone logo and the mention of milk suggest it is a dairy product, likely a yogurt or similar dairy drink.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Danone&quot;,
  &quot;product_variant&quot;: &quot;Activia 3.1 FL OZ (93mL)&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;3.1 FL OZ (93mL)&quot;,
  &quot;size_text&quot;: &quot;3.1 FL OZ (93mL)&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}</pre>
</details>

## 69. hires_20260208-212428_cup_0.95.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212428_cup_0.95.jpg" alt="hires_20260208-212428_cup_0.95.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212428_cup_0.95.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>weak</td></tr>
<tr><th align='left'>Display Name</th><td>food cup</td></tr>
<tr><th align='left'>Confidence</th><td>1.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td>food</td></tr>
<tr><th align='left'>Container</th><td>cup</td></tr>
<tr><th align='left'>Package</th><td>3/4 cup (170g) cup</td></tr>
<tr><th align='left'>Size</th><td>3/4 cup (170g)</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>Ga a Ff; a Mi G SD (J e &lt;s S ay fi Py o Wo? &lt;o ow at e BP .0 92 &amp; ve R40</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot180</td></tr>
<tr><th align='left'>OCR Size</th><td>3/4 cup (170g)</td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td></td></tr>
<tr><th align='left'>VLM Container</th><td>cup</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td>food</td></tr>
<tr><th align='left'>Resolver Container</th><td>cup</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>1.0</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>The raw vision model identified the container as a cup and detected text indicating food product details.</li></ul>
      
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
  &quot;container_spec&quot;: &quot;3/4 cup (170g)&quot;,
  &quot;size_text&quot;: &quot;3/4 cup (170g)&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;, &quot;text&quot;],
  &quot;notes&quot;: &quot;The image shows a nutrition facts label on a cup, indicating it is a food product container.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;Food&quot;,
  &quot;container_type&quot;: &quot;cup&quot;,
  &quot;container_spec&quot;: &quot;3/4 cup (170g)&quot;,
  &quot;size_text&quot;: &quot;3/4 cup (170g)&quot;,
  &quot;confidence&quot;: 1.0,
  &quot;reasons&quot;: [&quot;The raw vision model identified the container as a cup and detected text indicating food product details.&quot;]
}</pre>
</details>

## 70. hires_20260208-212428_cup_0.98.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212428_cup_0.98.jpg" alt="hires_20260208-212428_cup_0.98.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212428_cup_0.98.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Nestle Tea, coffee drink, Billion of Probabilities cup</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Nestle</td></tr>
<tr><th align='left'>Product</th><td>Nestle Tea</td></tr>
<tr><th align='left'>Variant</th><td>Tea</td></tr>
<tr><th align='left'>Category</th><td>coffee drink</td></tr>
<tr><th align='left'>Container</th><td>cup</td></tr>
<tr><th align='left'>Package</th><td>Billion of Probabilities cup</td></tr>
<tr><th align='left'>Size</th><td>Billion of Probabilities</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>ae Xa eVvy</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>Billion of Probabilities</td></tr>
<tr><th align='left'>VLM Brand</th><td>Nestlé</td></tr>
<tr><th align='left'>VLM Variant</th><td>Tea</td></tr>
<tr><th align='left'>VLM Family</th><td>coffee drink</td></tr>
<tr><th align='left'>VLM Container</th><td>cup</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Nestle</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Tea</td></tr>
<tr><th align='left'>Resolver Family</th><td>coffee drink</td></tr>
<tr><th align='left'>Resolver Container</th><td>cup</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Nestlé&quot;,
  &quot;product_variant&quot;: &quot;Tea&quot;,
  &quot;product_family&quot;: &quot;coffee drink&quot;,
  &quot;container_type&quot;: &quot;cup&quot;,
  &quot;container_spec&quot;: &quot;recyclable&quot;,
  &quot;size_text&quot;: &quot;Billion of Probabilities&quot;,
  &quot;best_catalog_match&quot;: &quot;Nestlé Tea&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a recyclable cup with text indicating it is related to a Nestlé product, likely a coffee drink.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Nestle&quot;,
  &quot;product_variant&quot;: &quot;Tea&quot;,
  &quot;product_family&quot;: &quot;coffee drinks&quot;,
  &quot;container_type&quot;: &quot;cup&quot;,
  &quot;container_spec&quot;: &quot;recyclable&quot;,
  &quot;size_text&quot;: &quot;Billion of Probabilities&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}</pre>
</details>

## 71. hires_20260208-212431_bottle_0.94.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212431_bottle_0.94.jpg" alt="hires_20260208-212431_bottle_0.94.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212431_bottle_0.94.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Danone Activia, yogurt, 31 floz bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Danone</td></tr>
<tr><th align='left'>Product</th><td>Danone Activia</td></tr>
<tr><th align='left'>Variant</th><td>Activia</td></tr>
<tr><th align='left'>Category</th><td>yogurt</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>31 floz bottle</td></tr>
<tr><th align='left'>Size</th><td>31 floz</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>aK cow nil KEEP REERNGEAAD CONTAINS: MUL bsrmuts Ll PA 5 31 FLOZ (93mL)</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>31 floz</td></tr>
<tr><th align='left'>VLM Brand</th><td>Danone</td></tr>
<tr><th align='left'>VLM Variant</th><td>Activia</td></tr>
<tr><th align='left'>VLM Family</th><td>yogurt</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Danone</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Activia</td></tr>
<tr><th align='left'>Resolver Family</th><td>yogurt</td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Danone&quot;,
  &quot;product_variant&quot;: &quot;Activia&quot;,
  &quot;product_family&quot;: &quot;yogurt&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;3.1 FL OZ (93mL)&quot;,
  &quot;size_text&quot;: &quot;3.1 FL OZ (93mL)&quot;,
  &quot;best_catalog_match&quot;: &quot;yogurt&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The container is a bottle with a label indicating it is a yogurt product.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Danone&quot;,
  &quot;product_variant&quot;: &quot;Activia&quot;,
  &quot;product_family&quot;: &quot;yogurt&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;3.1 FL OZ (93mL)&quot;,
  &quot;size_text&quot;: &quot;3.1 FL OZ (93mL)&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}</pre>
</details>

## 72. hires_20260208-212431_cup_0.94.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212431_cup_0.94.jpg" alt="hires_20260208-212431_cup_0.94.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212431_cup_0.94.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>nothing</td></tr>
<tr><th align='left'>Display Name</th><td>dairy jar</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>jar</td></tr>
<tr><th align='left'>Package</th><td>170g jar</td></tr>
<tr><th align='left'>Size</th><td>170g</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>mee C. qe % Me &amp; C. %. eG Ser vy Uy, in M, Si 10, &quot;” 2a C5. Mo fy Qi es 2 Brea, 97, Fy 2s ing Ir S/, one, cs &quot;ai &quot;es, ‘en, 4 (07 “eaeS ha ti, ety 85, &quot;ay Qe bo, 2: ey any Mi &amp; Kore %e rate Noy bokbars 105/ bagel a i, bon % hee Qn Q Prep lige On, eg Leeann in 16. Qj</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot270</td></tr>
<tr><th align='left'>OCR Size</th><td>170g</td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>jar</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td>jar</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>The OCR text and vision model output do not provide sufficient information to accurately identify the brand or product family.</li>
<li>The OCR text contains non-standard abbreviations (&#x27;mee&#x27;, &#x27;Qe&#x27;, &#x27;Mt&#x27;, &#x27;Fy&#x27;, &#x27;es&#x27;, &#x27;Qi&#x27;, &#x27;ir&#x27;, &#x27;ai&#x27;, &#x27;en&#x27;, &#x27;any&#x27;) and misspellings (C5, Qn, Q Prep) that make it difficult to accurately identify the brand.</li>
<li>The raw vision model output only identifies the container type as a jar and provides no specific information about the brand or product.</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;jar&quot;,
  &quot;container_spec&quot;: &quot;170g&quot;,
  &quot;size_text&quot;: &quot;170g&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a nutrition facts label on a dairy product, likely yogurt, given the context of the label and the container shape.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;jar&quot;,
  &quot;container_spec&quot;: &quot;170g&quot;,
  &quot;size_text&quot;: &quot;170g&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [
    &quot;The OCR text and vision model output do not provide sufficient information to accurately identify the brand or product family.&quot;,
    &quot;The OCR text contains non-standard abbreviations (&#x27;mee&#x27;, &#x27;Qe&#x27;, &#x27;Mt&#x27;, &#x27;Fy&#x27;, &#x27;es&#x27;, &#x27;Qi&#x27;, &#x27;ir&#x27;, &#x27;ai&#x27;, &#x27;en&#x27;, &#x27;any&#x27;) and misspellings (C5, Qn, Q Prep) that make it difficult to accurately identify the brand.&quot;,
    &quot;The raw vision model output only identifies the container type as a jar and provides no specific information about the brand or product.&quot;
  ]
}</pre>
</details>

## 73. hires_20260208-212431_cup_0.98.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212431_cup_0.98.jpg" alt="hires_20260208-212431_cup_0.98.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212431_cup_0.98.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Daisy Low Fat, dairy, 24 oz cup</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Daisy</td></tr>
<tr><th align='left'>Product</th><td>Daisy Low Fat</td></tr>
<tr><th align='left'>Variant</th><td>Low Fat</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>cup</td></tr>
<tr><th align='left'>Package</th><td>24 oz cup</td></tr>
<tr><th align='left'>Size</th><td>24 oz</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>OW FAT E@D |e nln == © oo =? 1) om i CAy es Pea o&gt;</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot270</td></tr>
<tr><th align='left'>OCR Size</th><td>24 oz</td></tr>
<tr><th align='left'>VLM Brand</th><td>Daisy</td></tr>
<tr><th align='left'>VLM Variant</th><td>Low Fat</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>cup</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Daisy</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Low Fat</td></tr>
<tr><th align='left'>Resolver Family</th><td>dairy</td></tr>
<tr><th align='left'>Resolver Container</th><td>cup</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Daisy&quot;,
  &quot;product_variant&quot;: &quot;Low Fat&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;cup&quot;,
  &quot;container_spec&quot;: &quot;24 oz&quot;,
  &quot;size_text&quot;: &quot;24 oz&quot;,
  &quot;best_catalog_match&quot;: &quot;cottage cheese&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The container is a single-use cup designed for serving cottage cheese.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Daisy&quot;,
  &quot;product_variant&quot;: &quot;Low Fat&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;cup&quot;,
  &quot;container_spec&quot;: &quot;24 oz&quot;,
  &quot;size_text&quot;: &quot;24 oz&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}</pre>
</details>

## 74. hires_20260208-212432_bottle_0.94.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212432_bottle_0.94.jpg" alt="hires_20260208-212432_bottle_0.94.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212432_bottle_0.94.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Danone Strawberry, juice, 93 ml bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Danone</td></tr>
<tr><th align='left'>Product</th><td>Danone Strawberry</td></tr>
<tr><th align='left'>Variant</th><td>Strawberry</td></tr>
<tr><th align='left'>Category</th><td>juice</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>93 ml bottle</td></tr>
<tr><th align='left'>Size</th><td>93 ml</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>aK ATHENS: ma neconcreeann OMTATIS: HA i 4 SIFLOZ (93mL) panone y j joa</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>93 ml</td></tr>
<tr><th align='left'>VLM Brand</th><td>Danone</td></tr>
<tr><th align='left'>VLM Variant</th><td>Strawberry</td></tr>
<tr><th align='left'>VLM Family</th><td>juice</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Danone</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Strawberry</td></tr>
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
  &quot;brand&quot;: &quot;Danone&quot;,
  &quot;product_variant&quot;: &quot;Strawberry&quot;,
  &quot;product_family&quot;: &quot;juice&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;3.1 FL OZ (93mL)&quot;,
  &quot;size_text&quot;: &quot;3.1 FL OZ (93mL)&quot;,
  &quot;best_catalog_match&quot;: &quot;Danone VIA&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;, &quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a Danone VIA strawberry juice bottle with a green label and a white cap.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Danone&quot;,
  &quot;product_variant&quot;: &quot;Strawberry&quot;,
  &quot;product_family&quot;: &quot;juice&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;3.1 FL OZ (93mL)&quot;,
  &quot;size_text&quot;: &quot;3.1 FL OZ (93mL)&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}</pre>
</details>

## 75. hires_20260208-212432_cup_0.94.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212432_cup_0.94.jpg" alt="hires_20260208-212432_cup_0.94.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212432_cup_0.94.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Siggi&#x27;s whole milk yogurt, dairy, 3/4 cup (170g) cup</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Siggi&#x27;s</td></tr>
<tr><th align='left'>Product</th><td>Siggi&#x27;s whole milk yogurt</td></tr>
<tr><th align='left'>Variant</th><td>whole milk yogurt</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>cup</td></tr>
<tr><th align='left'>Package</th><td>3/4 cup (170g) cup</td></tr>
<tr><th align='left'>Size</th><td>3/4 cup (170g)</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>Ds Xe % oe S Se oS &amp; My, &gt; Yin Shy, Wo np £3, i) Caf = Li es 4, x, oy Lo Us $57 be Sy</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot270</td></tr>
<tr><th align='left'>OCR Size</th><td>3/4 cup (170g)</td></tr>
<tr><th align='left'>VLM Brand</th><td>Siggi&#x27;s</td></tr>
<tr><th align='left'>VLM Variant</th><td>whole milk yogurt</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>cup</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Siggi&#x27;s</td></tr>
<tr><th align='left'>Resolver Variant</th><td>whole milk yogurt</td></tr>
<tr><th align='left'>Resolver Family</th><td>dairy</td></tr>
<tr><th align='left'>Resolver Container</th><td>cup</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Siggi&#x27;s&quot;,
  &quot;product_variant&quot;: &quot;whole milk yogurt&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;cup&quot;,
  &quot;container_spec&quot;: &quot;3/4 cup (170g)&quot;,
  &quot;size_text&quot;: &quot;3/4 cup (170g)&quot;,
  &quot;best_catalog_match&quot;: &quot;yogurt&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;text&quot;, &quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a nutrition facts label and the container is cylindrical, which is typical for yogurt cups.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> Based on the OCR text and the vision model output, here&#x27;s the normalized JSON:

```json
{
  &quot;brand&quot;: &quot;Siggi&#x27;s&quot;,
  &quot;product_variant&quot;: &quot;whole milk yogurt&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;cup&quot;,
  &quot;container_spec&quot;: &quot;3/4 cup (170g)&quot;,
  &quot;size_text&quot;: &quot;3/4 cup (170g)&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}
```

I&#x27;ve used the provided vision model output to fill in the details and followed the rules provided. The OCR text alone did not contain enough information to populate the `size_text` field, so I&#x27;ve left it as is from the vision model output.</pre>
</details>

## 76. hires_20260208-212432_cup_0.95.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212432_cup_0.95.jpg" alt="hires_20260208-212432_cup_0.95.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212432_cup_0.95.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Danone Whole Milk Yogurt, dairy, 93mL tub</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Danone</td></tr>
<tr><th align='left'>Product</th><td>Danone Whole Milk Yogurt</td></tr>
<tr><th align='left'>Variant</th><td>Whole Milk Yogurt</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>tub</td></tr>
<tr><th align='left'>Package</th><td>93mL tub</td></tr>
<tr><th align='left'>Size</th><td>93mL</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>‘NON ge (ques) ae er</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot180</td></tr>
<tr><th align='left'>OCR Size</th><td>93mL</td></tr>
<tr><th align='left'>VLM Brand</th><td>Danone</td></tr>
<tr><th align='left'>VLM Variant</th><td>whole milk yogurt</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>tub</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Danone</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Whole Milk Yogurt</td></tr>
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
  &quot;brand&quot;: &quot;Danone&quot;,
  &quot;product_variant&quot;: &quot;whole milk yogurt&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;93mL&quot;,
  &quot;size_text&quot;: &quot;93mL&quot;,
  &quot;best_catalog_match&quot;: &quot;Danone Whole Milk Yogurt&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;shape&quot;, &quot;text&quot;],
  &quot;notes&quot;: &quot;The image shows a close-up of a Danone yogurt container with a label indicating &#x27;whole milk yogurt&#x27; and a volume of 93mL.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Danone&quot;,
  &quot;product_variant&quot;: &quot;Whole Milk Yogurt&quot;,
  &quot;product_family&quot;: &quot;Dairy&quot;,
  &quot;container_type&quot;: &quot;Tub&quot;,
  &quot;container_spec&quot;: &quot;93mL&quot;,
  &quot;size_text&quot;: &quot;93mL&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}</pre>
</details>

## 77. hires_20260208-212434_bottle_0.93.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212434_bottle_0.93.jpg" alt="hires_20260208-212434_bottle_0.93.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212434_bottle_0.93.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>VIA Strawberry, dairy, 3.1 FL OZ (93mL) squeeze bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>VIA</td></tr>
<tr><th align='left'>Product</th><td>VIA Strawberry</td></tr>
<tr><th align='left'>Variant</th><td>Strawberry</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>squeeze bottle</td></tr>
<tr><th align='left'>Package</th><td>3.1 FL OZ (93mL) squeeze bottle</td></tr>
<tr><th align='left'>Size</th><td>3.1 FL OZ (93mL)</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>ins rain 31 FLOL (93m) 5 |</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>3.1 FL OZ (93mL)</td></tr>
<tr><th align='left'>VLM Brand</th><td>VIA</td></tr>
<tr><th align='left'>VLM Variant</th><td>Strawberry</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>squeeze bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>VIA</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Strawberry</td></tr>
<tr><th align='left'>Resolver Family</th><td>dairy</td></tr>
<tr><th align='left'>Resolver Container</th><td>squeeze bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;VIA&quot;,
  &quot;product_variant&quot;: &quot;Strawberry&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;squeeze bottle&quot;,
  &quot;container_spec&quot;: &quot;3.1 FL OZ (93mL)&quot;,
  &quot;size_text&quot;: &quot;3.1 FL OZ (93mL)&quot;,
  &quot;best_catalog_match&quot;: &quot;yogurt&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The container is a squeeze bottle, commonly used for dairy products like yogurt. The label indicates it contains strawberry flavor and is a dairy product.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;VIA&quot;,
  &quot;product_variant&quot;: &quot;Strawberry&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;squeeze bottle&quot;,
  &quot;container_spec&quot;: &quot;3.1 FL OZ (93mL)&quot;,
  &quot;size_text&quot;: &quot;3.1 FL OZ (93mL)&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}</pre>
</details>

## 78. hires_20260208-212434_cup_0.80.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212434_cup_0.80.jpg" alt="hires_20260208-212434_cup_0.80.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212434_cup_0.80.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Siggi&#x27;s 4% whole milk skyr, dairy, 3/4 cup (170g) cup</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Siggi&#x27;s</td></tr>
<tr><th align='left'>Product</th><td>Siggi&#x27;s 4% whole milk skyr</td></tr>
<tr><th align='left'>Variant</th><td>4% whole milk skyr</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>cup</td></tr>
<tr><th align='left'>Package</th><td>3/4 cup (170g) cup</td></tr>
<tr><th align='left'>Size</th><td>3/4 cup (170g)</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>= Se by y o Ss Ly Gi on ‘ ¥ Or 3° 60° y Sy ro &gt; ¥Y yy ay ss</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot180</td></tr>
<tr><th align='left'>OCR Size</th><td>3/4 cup (170g)</td></tr>
<tr><th align='left'>VLM Brand</th><td>Siggi&#x27;s</td></tr>
<tr><th align='left'>VLM Variant</th><td>4% whole milk skyr</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>cup</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Siggi&#x27;s</td></tr>
<tr><th align='left'>Resolver Variant</th><td>4% whole milk skyr</td></tr>
<tr><th align='left'>Resolver Family</th><td>dairy</td></tr>
<tr><th align='left'>Resolver Container</th><td>cup</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Siggi&#x27;s&quot;,
  &quot;product_variant&quot;: &quot;4% whole milk skyr&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;cup&quot;,
  &quot;container_spec&quot;: &quot;4 servings per container&quot;,
  &quot;size_text&quot;: &quot;3/4 cup (170g)&quot;,
  &quot;best_catalog_match&quot;: &quot;yogurt&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a nutrition facts label on a cup, indicating it is a dairy product.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Siggi&#x27;s&quot;,
  &quot;product_variant&quot;: &quot;4% whole milk skyr&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;cup&quot;,
  &quot;container_spec&quot;: &quot;4 servings per container&quot;,
  &quot;size_text&quot;: &quot;3/4 cup (170g)&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}</pre>
</details>

## 79. hires_20260208-212434_cup_0.96.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212434_cup_0.96.jpg" alt="hires_20260208-212434_cup_0.96.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212434_cup_0.96.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>nothing</td></tr>
<tr><th align='left'>Display Name</th><td>dairy tub</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>tub</td></tr>
<tr><th align='left'>Package</th><td>9 g tub</td></tr>
<tr><th align='left'>Size</th><td>9 g</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>Sty ye If Ak 9g</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>9 g</td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>tub</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td>dairy</td></tr>
<tr><th align='left'>Resolver Container</th><td>tub</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>The OCR text is too noisy to extract a brand name</li></ul>
      
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
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a close-up of a plastic tub lid with a date code, suggesting it is a dairy product container.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [&quot;The OCR text is too noisy to extract a brand name&quot;]
}</pre>
</details>

## 80. hires_20260208-212436_cup_0.96.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212436_cup_0.96.jpg" alt="hires_20260208-212436_cup_0.96.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212436_cup_0.96.jpg</code></p>
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
        <tr><th align='left'>OCR</th><td>TTS o oOo ‘LD A ty a= hep ~ Ss ~nnsiile Scapa Shaadi</td></tr>
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
      <p><strong>Resolver reasons</strong></p><ul><li>The OCR text is not clear and does not provide enough information to identify the product family or variant.</li>
<li>The image shows a close-up of a white tub with text indicating a date and possibly a product code, but no specific brand or product details can be inferred.</li></ul>
      
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
  &quot;notes&quot;: &quot;The image shows a close-up of a white tub with text indicating a date and possibly a product code. The OCR text is not clear and does not provide enough information to identify the product family or variant. The container type is inferred as a tub.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> Based on the provided OCR text and vision model output, it seems that we don&#x27;t have enough clear information to identify the brand, product variant, product family, or size_text. Therefore, we can populate the JSON object with the following values:

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
    &quot;The OCR text is not clear and does not provide enough information to identify the product family or variant.&quot;,
    &quot;The image shows a close-up of a white tub with text indicating a date and possibly a product code, but no specific brand or product details can be inferred.&quot;
  ]
}
```</pre>
</details>

## 81. hires_20260208-212438_bottle_0.97.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212438_bottle_0.97.jpg" alt="hires_20260208-212438_bottle_0.97.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212438_bottle_0.97.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>weak</td></tr>
<tr><th align='left'>Display Name</th><td>1.8L jug</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>jug</td></tr>
<tr><th align='left'>Package</th><td>1.8L jug</td></tr>
<tr><th align='left'>Size</th><td>1.8L</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td></td></tr>
<tr><th align='left'>OCR Engine</th><td>none</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>1.8L</td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td></td></tr>
<tr><th align='left'>VLM Container</th><td>jug</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td>jug</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>The OCR text does not provide a brand name</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;jug&quot;,
  &quot;container_spec&quot;: &quot;large&quot;,
  &quot;size_text&quot;: &quot;1.8L&quot;,
  &quot;best_catalog_match&quot;: &quot;jug&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;shape&quot;],
  &quot;notes&quot;: &quot;The container is a large jug, likely used for storing or dispensing a liquid, possibly water or another beverage.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;jug&quot;,
  &quot;container_spec&quot;: &quot;large&quot;,
  &quot;size_text&quot;: &quot;1.8L&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: [&quot;The OCR text does not provide a brand name&quot;]
}</pre>
</details>

## 82. hires_20260208-212438_cup_0.97.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212438_cup_0.97.jpg" alt="hires_20260208-212438_cup_0.97.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212438_cup_0.97.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Chobani Non-Dairy, yogurt, 6 oz tub</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Chobani</td></tr>
<tr><th align='left'>Product</th><td>Chobani Non-Dairy</td></tr>
<tr><th align='left'>Variant</th><td>Non-Dairy</td></tr>
<tr><th align='left'>Category</th><td>yogurt</td></tr>
<tr><th align='left'>Container</th><td>tub</td></tr>
<tr><th align='left'>Package</th><td>6 oz tub</td></tr>
<tr><th align='left'>Size</th><td>6 oz</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>go os 40 \ ot nw ad caus 0 2 x69 &gt;» \, gh et A \\ SN se OH.</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot270</td></tr>
<tr><th align='left'>OCR Size</th><td>6 oz</td></tr>
<tr><th align='left'>VLM Brand</th><td>Chobani</td></tr>
<tr><th align='left'>VLM Variant</th><td>Non-Nano</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>tub</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Chobani</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Non-Dairy</td></tr>
<tr><th align='left'>Resolver Family</th><td>yogurt</td></tr>
<tr><th align='left'>Resolver Container</th><td>tub</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>The OCR text does not provide a clear size or product variant beyond what is already provided by the vision model.</li>
<li>The vision model output correctly identifies &#x27;Chobani&#x27; as the brand and &#x27;yogurt&#x27; as the best catalog match.</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Chobani&quot;,
  &quot;product_variant&quot;: &quot;Non-Nano&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;Grade A&quot;,
  &quot;size_text&quot;: &quot;6 oz&quot;,
  &quot;best_catalog_match&quot;: &quot;yogurt&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The label indicates it is a dairy product, likely yogurt, with a &#x27;Grade A&#x27; designation and &#x27;Non-Nano&#x27; certification.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Chobani&quot;,
  &quot;product_variant&quot;: &quot;Non-Dairy&quot;,
  &quot;product_family&quot;: &quot;yogurt&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;Grade A&quot;,
  &quot;size_text&quot;: &quot;6 oz&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: [
    &quot;The OCR text does not provide a clear size or product variant beyond what is already provided by the vision model.&quot;,
    &quot;The vision model output correctly identifies &#x27;Chobani&#x27; as the brand and &#x27;yogurt&#x27; as the best catalog match.&quot;
  ]
}</pre>
</details>

## 83. hires_20260208-212440_cup_0.96.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212440_cup_0.96.jpg" alt="hires_20260208-212440_cup_0.96.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212440_cup_0.96.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Lipton Grade A, coffee creamer, 16 oz jar</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Lipton</td></tr>
<tr><th align='left'>Product</th><td>Lipton Grade A</td></tr>
<tr><th align='left'>Variant</th><td>Grade A</td></tr>
<tr><th align='left'>Category</th><td>coffee creamer</td></tr>
<tr><th align='left'>Container</th><td>jar</td></tr>
<tr><th align='left'>Package</th><td>16 oz jar</td></tr>
<tr><th align='left'>Size</th><td>16 oz</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>wr gs ais w ad Ss ® ‘49° xe ° D&gt; Ag i TQ rON \Y NY</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot270</td></tr>
<tr><th align='left'>OCR Size</th><td>16 oz</td></tr>
<tr><th align='left'>VLM Brand</th><td>Lipton</td></tr>
<tr><th align='left'>VLM Variant</th><td>Grade A</td></tr>
<tr><th align='left'>VLM Family</th><td>coffee creamer</td></tr>
<tr><th align='left'>VLM Container</th><td>jar</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Lipton</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Grade A</td></tr>
<tr><th align='left'>Resolver Family</th><td>coffee creamer</td></tr>
<tr><th align='left'>Resolver Container</th><td>jar</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Lipton&quot;,
  &quot;product_variant&quot;: &quot;Grade A&quot;,
  &quot;product_family&quot;: &quot;coffee creamer&quot;,
  &quot;container_type&quot;: &quot;jar&quot;,
  &quot;container_spec&quot;: &quot;16 oz&quot;,
  &quot;size_text&quot;: &quot;16 oz&quot;,
  &quot;best_catalog_match&quot;: &quot;coffee creamer&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The label indicates it is a coffee creamer with a &#x27;Grade A&#x27; designation, which is a common term for high-quality creamers.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Lipton&quot;,
  &quot;product_variant&quot;: &quot;Grade A&quot;,
  &quot;product_family&quot;: &quot;coffee creamer&quot;,
  &quot;container_type&quot;: &quot;jar&quot;,
  &quot;container_spec&quot;: &quot;16 oz&quot;,
  &quot;size_text&quot;: &quot;16 oz&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}</pre>
</details>

## 84. hires_20260208-212442_cup_0.97.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212442_cup_0.97.jpg" alt="hires_20260208-212442_cup_0.97.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212442_cup_0.97.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Fage Total, yogurt, 6oz jar</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Fage</td></tr>
<tr><th align='left'>Product</th><td>Fage Total</td></tr>
<tr><th align='left'>Variant</th><td>Total</td></tr>
<tr><th align='left'>Category</th><td>yogurt</td></tr>
<tr><th align='left'>Container</th><td>jar</td></tr>
<tr><th align='left'>Package</th><td>6oz jar</td></tr>
<tr><th align='left'>Size</th><td>6oz</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>3 a 09 iol S y lo TNS</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot270</td></tr>
<tr><th align='left'>OCR Size</th><td>6oz</td></tr>
<tr><th align='left'>VLM Brand</th><td>FAGE</td></tr>
<tr><th align='left'>VLM Variant</th><td>Total</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>jar</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Fage</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Total</td></tr>
<tr><th align='left'>Resolver Family</th><td>yogurt</td></tr>
<tr><th align='left'>Resolver Container</th><td>jar</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;FAGE&quot;,
  &quot;product_variant&quot;: &quot;Total&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;jar&quot;,
  &quot;container_spec&quot;: &quot;5%&quot;,
  &quot;size_text&quot;: &quot;6oz&quot;,
  &quot;best_catalog_match&quot;: &quot;yogurt&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a container with a label indicating it is a dairy product, specifically a yogurt product, with a 5% fat content. The OCR text and logo are consistent with this identification.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> Based on the rules provided, here&#x27;s the normalized JSON output:

```json
{
  &quot;brand&quot;: &quot;Fage&quot;,
  &quot;product_variant&quot;: &quot;Total&quot;,
  &quot;product_family&quot;: &quot;yogurt&quot;,
  &quot;container_type&quot;: &quot;jar&quot;,
  &quot;container_spec&quot;: &quot;5%&quot;,
  &quot;size_text&quot;: &quot;6oz&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}
```

The OCR text was not noisy in this case, so no normalization was necessary for the brand name. However, the spelling of &quot;FAGE&quot; was corrected to &quot;Fage&quot; to match a more standard brand naming convention. The rest of the information was directly taken from the raw vision model output.</pre>
</details>

## 85. hires_20260208-212444_cup_0.98.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212444_cup_0.98.jpg" alt="hires_20260208-212444_cup_0.98.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212444_cup_0.98.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>nothing</td></tr>
<tr><th align='left'>Display Name</th><td>160 Calories tub</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>tub</td></tr>
<tr><th align='left'>Package</th><td>160 Calories tub</td></tr>
<tr><th align='left'>Size</th><td>160 Calories</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>Ges a oe rc &lt;) aA es a ah Eg = = «=</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot90</td></tr>
<tr><th align='left'>OCR Size</th><td>160 Calories</td></tr>
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
      <p><strong>Resolver reasons</strong></p><ul><li>The brand and product family are not identifiable from the image alone.</li></ul>
      
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
  &quot;container_spec&quot;: &quot;About 5 servings per container&quot;,
  &quot;size_text&quot;: &quot;160 Calories&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a nutrition facts label on a tub, indicating it is a food product. The label mentions &#x27;160 Calories&#x27; and &#x27;About 5 servings per container&#x27;, which suggests it could be a food product like yogurt or a similar item. However, the brand and product family are not identifiable from the image alone.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;About 5 servings per container&quot;,
  &quot;size_text&quot;: &quot;160 Calories&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [&quot;The brand and product family are not identifiable from the image alone.&quot;]
}</pre>
</details>

## 86. hires_20260208-212444_thermoform_0.93.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212444_thermoform_0.93.jpg" alt="hires_20260208-212444_thermoform_0.93.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212444_thermoform_0.93.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Pete &amp; Gerry&#x27;s Organic Eggs Organic Pastures, dairy, 12 tub</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Pete &amp; Gerry&#x27;s Organic Eggs</td></tr>
<tr><th align='left'>Product</th><td>Pete &amp; Gerry&#x27;s Organic Eggs Organic Pastures</td></tr>
<tr><th align='left'>Variant</th><td>Organic Pastures</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>tub</td></tr>
<tr><th align='left'>Package</th><td>12 tub</td></tr>
<tr><th align='left'>Size</th><td>12</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>ca E&#x27;S er rp cok Ma eC Smet. ois-¥OR mi r ele | saunisvé 9) woe ‘q3ai OW i, Peace ne = Ps aoe ae ass os cate oa’</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot270</td></tr>
<tr><th align='left'>OCR Size</th><td>12</td></tr>
<tr><th align='left'>VLM Brand</th><td>Pete &amp; Gerry&#x27;s</td></tr>
<tr><th align='left'>VLM Variant</th><td>Organic Pastures</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>tub</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Pete &amp; Gerry&#x27;s Organic Eggs</td></tr>
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
  &quot;brand&quot;: &quot;Pete &amp; Gerry&#x27;s&quot;,
  &quot;product_variant&quot;: &quot;Organic Pastures&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;12 Fresh Brown Eggs&quot;,
  &quot;size_text&quot;: &quot;12&quot;,
  &quot;best_catalog_match&quot;: &quot;egg&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a tub of organic eggs with a focus on organic and free-range farming practices.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Pete &amp; Gerry&#x27;s Organic Eggs&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;12 Fresh Brown Eggs&quot;,
  &quot;size_text&quot;: &quot;12&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}</pre>
</details>

## 87. hires_20260208-212446_thermoform_0.93.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212446_thermoform_0.93.jpg" alt="hires_20260208-212446_thermoform_0.93.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212446_thermoform_0.93.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Pete &amp; Gerry&#x27;s Organic Fresh Brown Eggs, eggs, 12 Fresh Brown Eggs clamshell</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Pete &amp; Gerry&#x27;s</td></tr>
<tr><th align='left'>Product</th><td>Pete &amp; Gerry&#x27;s Organic Fresh Brown Eggs</td></tr>
<tr><th align='left'>Variant</th><td>Organic Fresh Brown Eggs</td></tr>
<tr><th align='left'>Category</th><td>eggs</td></tr>
<tr><th align='left'>Container</th><td>clamshell</td></tr>
<tr><th align='left'>Package</th><td>12 Fresh Brown Eggs clamshell</td></tr>
<tr><th align='left'>Size</th><td>12 Fresh Brown Eggs</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>oo vn E sp san on Prerercta . Prt Oe szun sve woe yo Nea ie) ‘aaa4 aww? AE eee ea 23 pas</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot270</td></tr>
<tr><th align='left'>OCR Size</th><td>12 Fresh Brown Eggs</td></tr>
<tr><th align='left'>VLM Brand</th><td>Pete &amp; Gerry&#x27;s</td></tr>
<tr><th align='left'>VLM Variant</th><td>Organic Fresh Brown Eggs</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>clamshell</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Pete &amp; Gerry&#x27;s</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Organic Fresh Brown Eggs</td></tr>
<tr><th align='left'>Resolver Family</th><td>eggs</td></tr>
<tr><th align='left'>Resolver Container</th><td>clamshell</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Pete &amp; Gerry&#x27;s&quot;,
  &quot;product_variant&quot;: &quot;Organic Fresh Brown Eggs&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;clamshell&quot;,
  &quot;container_spec&quot;: &quot;12 Fresh Brown Eggs&quot;,
  &quot;size_text&quot;: &quot;12 Fresh Brown Eggs&quot;,
  &quot;best_catalog_match&quot;: &quot;egg&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a package of organic eggs with a focus on the branding and product details.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Pete &amp; Gerry&#x27;s&quot;,
  &quot;product_variant&quot;: &quot;Organic Fresh Brown Eggs&quot;,
  &quot;product_family&quot;: &quot;eggs&quot;,
  &quot;container_type&quot;: &quot;clamshell&quot;,
  &quot;container_spec&quot;: &quot;12 Fresh Brown Eggs&quot;,
  &quot;size_text&quot;: &quot;12 Fresh Brown Eggs&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}</pre>
</details>

## 88. hires_20260208-212448_cup_0.76.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212448_cup_0.76.jpg" alt="hires_20260208-212448_cup_0.76.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212448_cup_0.76.jpg</code></p>
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
        <tr><th align='left'>OCR</th><td>Wy dy. SO. ey xe</td></tr>
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
      <p><strong>Resolver reasons</strong></p><ul><li>The text is not fully legible and there are no clear brand or product family indicators.</li></ul>
      
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
  &quot;notes&quot;: &quot;The image shows a close-up of a white plastic tub with text on the side, but the text is not fully legible and there are no clear brand or product family indicators.&quot;
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
  &quot;reasons&quot;: [
    &quot;The text is not fully legible and there are no clear brand or product family indicators.&quot;
  ]
}</pre>
</details>

## 89. hires_20260208-212450_bottle_0.97.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212450_bottle_0.97.jpg" alt="hires_20260208-212450_bottle_0.97.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212450_bottle_0.97.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>nothing</td></tr>
<tr><th align='left'>Display Name</th><td>110 bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>110 bottle</td></tr>
<tr><th align='left'>Size</th><td>110</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>les 498 rere? q oO ( € ?</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot90</td></tr>
<tr><th align='left'>OCR Size</th><td>110</td></tr>
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
      <p><strong>Resolver reasons</strong></p><ul><li>The OCR text is unreadable and the vision model output suggests a dairy product but does not provide enough information to confidently identify the brand, product variant, or product family.</li></ul>
      
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
  &quot;size_text&quot;: &quot;110&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;, &quot;text&quot;],
  &quot;notes&quot;: &quot;The image shows a bottle with a nutrition facts label, suggesting it is a dairy product. However, the OCR text and shortlist candidates are not providing enough information to confidently identify the brand, product variant, or product family.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;110&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [
    &quot;The OCR text is unreadable and the vision model output suggests a dairy product but does not provide enough information to confidently identify the brand, product variant, or product family.&quot;
  ]
}</pre>
</details>

## 90. hires_20260208-212450_cup_0.97.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212450_cup_0.97.jpg" alt="hires_20260208-212450_cup_0.97.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212450_cup_0.97.jpg</code></p>
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
        <tr><th align='left'>OCR</th><td>y fy Ss</td></tr>
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
      <p><strong>Resolver reasons</strong></p><ul><li>OCR text &#x27;y fy Ss&#x27; is not clear and does not provide any identifiable information about the product or brand.</li></ul>
      
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
  &quot;notes&quot;: &quot;The image shows a close-up of a white plastic container with text indicating a best-by date. The OCR text &#x27;y fy Ss&#x27; is not clear and does not provide any identifiable information about the product or brand.&quot;
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
  &quot;reasons&quot;: [&quot;OCR text &#x27;y fy Ss&#x27; is not clear and does not provide any identifiable information about the product or brand.&quot;]
}</pre>
</details>

## 91. hires_20260208-212452_bottle_0.97.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212452_bottle_0.97.jpg" alt="hires_20260208-212452_bottle_0.97.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212452_bottle_0.97.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Lactaid Milk, dairy, 1 cup (240 ml) bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Lactaid</td></tr>
<tr><th align='left'>Product</th><td>Lactaid Milk</td></tr>
<tr><th align='left'>Variant</th><td>Milk</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>1 cup (240 ml) bottle</td></tr>
<tr><th align='left'>Size</th><td>1 cup (240 ml)</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>— lp Nut nF act&gt; Ke sp at Ao ‘Caines wz oo ‘a Sige \ way Wu ih on un on vt ee won 00 was oo</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot90</td></tr>
<tr><th align='left'>OCR Size</th><td>1 cup (240 ml)</td></tr>
<tr><th align='left'>VLM Brand</th><td>Lactaid</td></tr>
<tr><th align='left'>VLM Variant</th><td>Milk</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Lactaid</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Milk</td></tr>
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
  &quot;brand&quot;: &quot;Lactaid&quot;,
  &quot;product_variant&quot;: &quot;Milk&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;1 cup (240 ml)&quot;,
  &quot;size_text&quot;: &quot;1 cup (240 ml)&quot;,
  &quot;best_catalog_match&quot;: &quot;milk&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;text&quot;, &quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a milk container with a nutrition facts label, indicating it is a dairy product.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Lactaid&quot;,
  &quot;product_variant&quot;: &quot;Milk&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;1 cup (240 ml)&quot;,
  &quot;size_text&quot;: &quot;1 cup (240 ml)&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}</pre>
</details>

## 92. hires_20260208-212452_cup_0.97.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212452_cup_0.97.jpg" alt="hires_20260208-212452_cup_0.97.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212452_cup_0.97.jpg</code></p>
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
        <tr><th align='left'>OCR</th><td>ge</td></tr>
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
      <p><strong>Resolver reasons</strong></p><ul><li>OCR text &#x27;ge&#x27; is not clear and no brand or product family can be identified from the image.</li></ul>
      
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
  &quot;notes&quot;: &quot;The image shows the bottom of a white tub with text indicating a best-by date. The OCR text &#x27;ge&#x27; is not clear and no brand or product family can be identified from the image.&quot;
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
  &quot;reasons&quot;: [&quot;OCR text &#x27;ge&#x27; is not clear and no brand or product family can be identified from the image.&quot;]
}</pre>
</details>

## 93. hires_20260208-212456_bottle_0.98.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212456_bottle_0.98.jpg" alt="hires_20260208-212456_bottle_0.98.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212456_bottle_0.98.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>nothing</td></tr>
<tr><th align='left'>Display Name</th><td>200 ML jug</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>jug</td></tr>
<tr><th align='left'>Package</th><td>200 ML jug</td></tr>
<tr><th align='left'>Size</th><td>200 ML</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>si</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>200 ML</td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td></td></tr>
<tr><th align='left'>VLM Container</th><td>jug</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td></td></tr>
<tr><th align='left'>Resolver Container</th><td>jug</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>Lack of branding or product family information</li></ul>
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;jug&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;200 ML&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a plastic jug with a green cap, likely used for dairy products, but the OCR text &#x27;si&#x27; and the lack of branding or product family information make it difficult to determine the exact product.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;jug&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;200 ML&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [&quot;Lack of branding or product family information&quot;]
}</pre>
</details>

## 94. hires_20260208-212458_bottle_0.97.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212458_bottle_0.97.jpg" alt="hires_20260208-212458_bottle_0.97.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212458_bottle_0.97.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>nothing</td></tr>
<tr><th align='left'>Display Name</th><td>clear glass with red lid</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>jar</td></tr>
<tr><th align='left'>Package</th><td>clear glass with red lid</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>a Vi SS thd Up hh re ee F a cies . a a</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot90</td></tr>
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
      <p><strong>Resolver reasons</strong></p><ul><li>OCR text and shortlist candidates are not informative</li></ul>
      
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
  &quot;notes&quot;: &quot;The image shows a clear glass jar with a red lid, but the OCR text and shortlist candidates are not informative for identifying the product.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> Based on the provided OCR text and vision model output, I will return the following JSON:

```json
{
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;jar&quot;,
  &quot;container_spec&quot;: &quot;clear glass with red lid&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [&quot;OCR text and shortlist candidates are not informative&quot;]
}
```

Explanation: Since the OCR text does not provide any useful information about the brand, product variant, or product family, I set those fields to empty strings. The container type is determined by the vision model output. The container specification is derived from the description provided in the vision model&#x27;s notes. The confidence value remains unchanged as it was originally 0.0. Finally, I include &quot;reasons&quot; with an explanation of why some fields are set to empty strings.</pre>
</details>

## 95. hires_20260208-212458_bottle_0.98.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212458_bottle_0.98.jpg" alt="hires_20260208-212458_bottle_0.98.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212458_bottle_0.98.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Dawn Platinum, dish soap, 2.56L jug</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Dawn</td></tr>
<tr><th align='left'>Product</th><td>Dawn Platinum</td></tr>
<tr><th align='left'>Variant</th><td>Platinum</td></tr>
<tr><th align='left'>Category</th><td>dish soap</td></tr>
<tr><th align='left'>Container</th><td>jug</td></tr>
<tr><th align='left'>Package</th><td>2.56L jug</td></tr>
<tr><th align='left'>Size</th><td>2.56L</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>DP plate 200 Ea Sot ove REASE SI 2 REMC. re</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot270</td></tr>
<tr><th align='left'>OCR Size</th><td>2.56L</td></tr>
<tr><th align='left'>VLM Brand</th><td>Dawn</td></tr>
<tr><th align='left'>VLM Variant</th><td>Platinum</td></tr>
<tr><th align='left'>VLM Family</th><td>dish soap</td></tr>
<tr><th align='left'>VLM Container</th><td>jug</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Dawn</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Platinum</td></tr>
<tr><th align='left'>Resolver Family</th><td>dish soap</td></tr>
<tr><th align='left'>Resolver Container</th><td>jug</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Dawn&quot;,
  &quot;product_variant&quot;: &quot;Platinum&quot;,
  &quot;product_family&quot;: &quot;dish soap&quot;,
  &quot;container_type&quot;: &quot;jug&quot;,
  &quot;container_spec&quot;: &quot;2.56L&quot;,
  &quot;size_text&quot;: &quot;2.56L&quot;,
  &quot;best_catalog_match&quot;: &quot;Dawn Platinum Dish Soap&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;, &quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a large jug of Dawn Platinum dish soap with a label indicating it removes 99% of grease and food residue.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> Based on the provided OCR text and vision model output, here&#x27;s the normalized JSON:

```json
{
  &quot;brand&quot;: &quot;Dawn&quot;,
  &quot;product_variant&quot;: &quot;Platinum&quot;,
  &quot;product_family&quot;: &quot;dish soap&quot;,
  &quot;container_type&quot;: &quot;jug&quot;,
  &quot;container_spec&quot;: &quot;2.56L&quot;,
  &quot;size_text&quot;: &quot;2.56L&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}
```

The raw vision model output was used to fill in the details, as it provides more accurate and reliable information compared to the noisy OCR text. The OCR text was only used for size_text but since it matches the container_spec from the vision model output, it is considered acceptable.</pre>
</details>

## 96. hires_20260208-212458_cup_0.97.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212458_cup_0.97.jpg" alt="hires_20260208-212458_cup_0.97.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212458_cup_0.97.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>nothing</td></tr>
<tr><th align='left'>Display Name</th><td>cup</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td></td></tr>
<tr><th align='left'>Container</th><td>cup</td></tr>
<tr><th align='left'>Package</th><td>cup</td></tr>
<tr><th align='left'>Size</th><td></td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>Pasa, Pee &amp;@ he,</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot90</td></tr>
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
      <p><strong>Resolver reasons</strong></p><ul><li>OCR text is not clear and does not provide any useful information for identification.</li>
<li>Vision model output also did not provide a clear brand</li></ul>
      
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
  &quot;notes&quot;: &quot;The image shows a close-up of a cup with a small amount of residue, possibly from a beverage. The OCR text is not clear and does not provide any useful information for identification.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;cup&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [&quot;OCR text is not clear and does not provide any useful information for identification.&quot;, &quot;Vision model output also did not provide a clear brand&quot;]
}</pre>
</details>

## 97. hires_20260208-212500_bottle_0.97.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212500_bottle_0.97.jpg" alt="hires_20260208-212500_bottle_0.97.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212500_bottle_0.97.jpg</code></p>
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
        <tr><th align='left'>OCR</th><td>Ae mae \ Ss oe =e</td></tr>
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
      <p><strong>Resolver reasons</strong></p><ul><li>OCR text is not applicable and the vision model output does not provide a specific brand</li></ul>
      
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
  &quot;notes&quot;: &quot;The image shows a close-up of a bottle cap with a red center, but the OCR text and shortlist candidates are not applicable.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [&quot;OCR text is not applicable and the vision model output does not provide a specific brand&quot;]
}</pre>
</details>

## 98. hires_20260208-212502_bottle_0.98.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212502_bottle_0.98.jpg" alt="hires_20260208-212502_bottle_0.98.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212502_bottle_0.98.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>nothing</td></tr>
<tr><th align='left'>Display Name</th><td>beverage bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Brand</th><td></td></tr>
<tr><th align='left'>Product</th><td></td></tr>
<tr><th align='left'>Variant</th><td></td></tr>
<tr><th align='left'>Category</th><td>beverage</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>6.0L bottle</td></tr>
<tr><th align='left'>Size</th><td>6.0L</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>Pe) i &amp; belineaastll nc ee</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot90</td></tr>
<tr><th align='left'>OCR Size</th><td>6.0L</td></tr>
<tr><th align='left'>VLM Brand</th><td></td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td></td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.0</td></tr>
<tr><th align='left'>Resolver Brand</th><td></td></tr>
<tr><th align='left'>Resolver Variant</th><td></td></tr>
<tr><th align='left'>Resolver Family</th><td>beverage</td></tr>
<tr><th align='left'>Resolver Container</th><td>bottle</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.0</td></tr>
      </table>
      <p><strong>Resolver reasons</strong></p><ul><li>Noise in OCR text</li></ul>
      
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
  &quot;size_text&quot;: &quot;6.0L&quot;,
  &quot;best_catalog_match&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;evidence&quot;: [&quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a close-up of a bottle cap with a red center, suggesting it is a beverage container. The size text &#x27;6.0L&#x27; indicates a large volume, which is typical for beverages like soda or sparkling water.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;Beverage&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;&quot;,
  &quot;size_text&quot;: &quot;6.0L&quot;,
  &quot;confidence&quot;: 0.0,
  &quot;reasons&quot;: [&quot;Noise in OCR text&quot;]
}</pre>
</details>

## 99. hires_20260208-212502_thermoform_0.92.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212502_thermoform_0.92.jpg" alt="hires_20260208-212502_thermoform_0.92.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212502_thermoform_0.92.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>Nellie&#x27;s Free Range Eggs, dairy, 12 Large Grade A Fresh Brown Eggs clamshell</td></tr>
<tr><th align='left'>Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Brand</th><td>Nellie&#x27;s</td></tr>
<tr><th align='left'>Product</th><td>Nellie&#x27;s Free Range Eggs</td></tr>
<tr><th align='left'>Variant</th><td>Free Range Eggs</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>clamshell</td></tr>
<tr><th align='left'>Package</th><td>12 Large Grade A Fresh Brown Eggs clamshell</td></tr>
<tr><th align='left'>Size</th><td>12 Large Grade A Fresh Brown Eggs</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>oe. | 74 Hip id x | | ad</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>12 Large Grade A Fresh Brown Eggs</td></tr>
<tr><th align='left'>VLM Brand</th><td>Nellie&#x27;s</td></tr>
<tr><th align='left'>VLM Variant</th><td>Free Range Eggs</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>clamshell</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.9</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Nellie&#x27;s</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Free Range Eggs</td></tr>
<tr><th align='left'>Resolver Family</th><td>dairy</td></tr>
<tr><th align='left'>Resolver Container</th><td>clamshell</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.9</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;Nellie&#x27;s&quot;,
  &quot;product_variant&quot;: &quot;Free Range Eggs&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;clamshell&quot;,
  &quot;container_spec&quot;: &quot;12 Large Grade A Fresh Brown Eggs&quot;,
  &quot;size_text&quot;: &quot;12 Large Grade A Fresh Brown Eggs&quot;,
  &quot;best_catalog_match&quot;: &quot;egg carton&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a package of eggs with branding and product details.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Nellie&#x27;s&quot;,
  &quot;product_variant&quot;: &quot;Free Range Eggs&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;clamshell&quot;,
  &quot;container_spec&quot;: &quot;12 Large Grade A Fresh Brown Eggs&quot;,
  &quot;size_text&quot;: &quot;12 Large Grade A Fresh Brown Eggs&quot;,
  &quot;confidence&quot;: 0.9,
  &quot;reasons&quot;: []
}</pre>
</details>

## 100. hires_20260208-212504_bottle_0.95.jpg

<table>
  <tr>
    <td valign="top" width="360">
      <img src="detections/detections-20260208/hires_20260208-212504_bottle_0.95.jpg" alt="hires_20260208-212504_bottle_0.95.jpg" width="340" />
      <p><code>detections/detections-20260208/hires_20260208-212504_bottle_0.95.jpg</code></p>
    </td>
    <td valign="top">
      <p><strong>Final prediction</strong></p>
      <table>
        <tr><th align='left'>Detection</th><td>best</td></tr>
<tr><th align='left'>Display Name</th><td>ACTIV Strawberry, yogurt, 120g tub</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>ACTIV</td></tr>
<tr><th align='left'>Product</th><td>ACTIV Strawberry</td></tr>
<tr><th align='left'>Variant</th><td>Strawberry</td></tr>
<tr><th align='left'>Category</th><td>yogurt</td></tr>
<tr><th align='left'>Container</th><td>tub</td></tr>
<tr><th align='left'>Package</th><td>120g tub</td></tr>
<tr><th align='left'>Size</th><td>120g</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td>eS to</td></tr>
<tr><th align='left'>OCR Engine</th><td>tesseract</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>120g</td></tr>
<tr><th align='left'>VLM Brand</th><td>ACTIV</td></tr>
<tr><th align='left'>VLM Variant</th><td>Strawberry</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>tub</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>ACTIV</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Strawberry</td></tr>
<tr><th align='left'>Resolver Family</th><td>yogurt</td></tr>
<tr><th align='left'>Resolver Container</th><td>tub</td></tr>
<tr><th align='left'>Resolver Confidence</th><td>0.8</td></tr>
      </table>
      
      
    </td>
  </tr>
</table>

<details><summary>Raw model output</summary>
<p><strong>VLM Raw</strong></p><pre>```json
{
  &quot;brand&quot;: &quot;ACTIV&quot;,
  &quot;product_variant&quot;: &quot;Strawberry&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;low fat&quot;,
  &quot;size_text&quot;: &quot;120g&quot;,
  &quot;best_catalog_match&quot;: &quot;yogurt&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;ocr&quot;],
  &quot;notes&quot;: &quot;The image shows a close-up of a yogurt container with a focus on the label and branding.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> Based on the provided OCR text and vision model output, here&#x27;s the normalized JSON response:

```json
{
  &quot;brand&quot;: &quot;ACTIV&quot;,
  &quot;product_variant&quot;: &quot;Strawberry&quot;,
  &quot;product_family&quot;: &quot;yogurt&quot;,
  &quot;container_type&quot;: &quot;tub&quot;,
  &quot;container_spec&quot;: &quot;low fat&quot;,
  &quot;size_text&quot;: &quot;120g&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}
```

In this response, I&#x27;ve followed the provided rules:
- The brand has been normalized to its consumer-facing name, which in this case is already provided as &quot;ACTIV&quot;.
- The product family has been set to yogurt based on the best catalog match from the vision model.
- No generic category words are present in the output.
- Since the OCR text does not provide any noisy or hallucinated details, an empty `reasons` array is returned.</pre>
</details>
