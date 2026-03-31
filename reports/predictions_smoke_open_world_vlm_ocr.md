# Prediction Report

Source JSON: `predictions_smoke_open_world_vlm_ocr.json`

Entries: 4

This file is intended for side-by-side visual review in your editor preview.


## 1. hires_20260208-212321_bottle_0.94.jpg

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
<tr><th align='left'>Display Name</th><td>A&amp;W Root Beer, soda, 500 mL bottle</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>A&amp;W</td></tr>
<tr><th align='left'>Product</th><td>A&amp;W Root Beer</td></tr>
<tr><th align='left'>Variant</th><td>Root Beer</td></tr>
<tr><th align='left'>Category</th><td>soda</td></tr>
<tr><th align='left'>Container</th><td>bottle</td></tr>
<tr><th align='left'>Package</th><td>500 mL bottle</td></tr>
<tr><th align='left'>Size</th><td>500 mL</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td></td></tr>
<tr><th align='left'>OCR Engine</th><td>none</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>500 mL</td></tr>
<tr><th align='left'>VLM Brand</th><td>A&amp;W</td></tr>
<tr><th align='left'>VLM Variant</th><td>Root Beer</td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>A&amp;W</td></tr>
<tr><th align='left'>Resolver Variant</th><td>Root Beer</td></tr>
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
  &quot;brand&quot;: &quot;A&amp;W&quot;,
  &quot;product_variant&quot;: &quot;Root Beer&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;500 mL&quot;,
  &quot;best_catalog_match&quot;: &quot;A&amp;W Root Beer&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;shape&quot;],
  &quot;notes&quot;: &quot;The image shows a plastic bottle with a label indicating it is A&amp;W Root Beer, a well-known soda brand.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;A&amp;W&quot;,
  &quot;product_variant&quot;: &quot;Root Beer&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;500 mL&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}</pre>
</details>

## 2. hires_20260208-212333_can_0.86.jpg

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
        <tr><th align='left'>OCR</th><td></td></tr>
<tr><th align='left'>OCR Engine</th><td>none</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
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
      <p><strong>Resolver reasons</strong></p><ul><li>logo</li>
<li>shape</li></ul>
      
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
  &quot;notes&quot;: &quot;The image shows a close-up of a red can with a silver pull-tab, which is characteristic of a Coca-Cola can. The &#x27;Star Wars&#x27; logo suggests a special edition product.&quot;
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
  &quot;reasons&quot;: [&quot;logo&quot;, &quot;shape&quot;]
}</pre>
</details>

## 3. hires_20260208-212404_bottle_0.97.jpg

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
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
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
        <tr><th align='left'>OCR</th><td></td></tr>
<tr><th align='left'>OCR Engine</th><td>none</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td></td></tr>
<tr><th align='left'>VLM Brand</th><td>Pepsi</td></tr>
<tr><th align='left'>VLM Variant</th><td></td></tr>
<tr><th align='left'>VLM Family</th><td>soda</td></tr>
<tr><th align='left'>VLM Container</th><td>bottle</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Pepsi</td></tr>
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
  &quot;brand&quot;: &quot;Pepsi&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;best_catalog_match&quot;: &quot;Pepsi bottle&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;],
  &quot;notes&quot;: &quot;The image shows a close-up of a Pepsi bottle with a visible logo.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Pepsi&quot;,
  &quot;product_variant&quot;: &quot;&quot;,
  &quot;product_family&quot;: &quot;soda&quot;,
  &quot;container_type&quot;: &quot;bottle&quot;,
  &quot;container_spec&quot;: &quot;plastic&quot;,
  &quot;size_text&quot;: &quot;&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}</pre>
</details>

## 4. hires_20260208-212446_thermoform_0.93.jpg

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
<tr><th align='left'>Display Name</th><td>Pete &amp; Gerry&#x27;s Organic Eggs Organic, dairy, Grade A Large clamshell</td></tr>
<tr><th align='left'>Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Brand</th><td>Pete &amp; Gerry&#x27;s Organic Eggs</td></tr>
<tr><th align='left'>Product</th><td>Pete &amp; Gerry&#x27;s Organic Eggs Organic</td></tr>
<tr><th align='left'>Variant</th><td>Organic</td></tr>
<tr><th align='left'>Category</th><td>dairy</td></tr>
<tr><th align='left'>Container</th><td>clamshell</td></tr>
<tr><th align='left'>Package</th><td>Grade A Large clamshell</td></tr>
<tr><th align='left'>Size</th><td>Grade A Large</td></tr>
<tr><th align='left'>Catalog Match</th><td></td></tr>
      </table>
      <p><strong>Signals</strong></p>
      <table>
        <tr><th align='left'>OCR</th><td></td></tr>
<tr><th align='left'>OCR Engine</th><td>none</td></tr>
<tr><th align='left'>OCR Rotation</th><td>rot0</td></tr>
<tr><th align='left'>OCR Size</th><td>Grade A Large</td></tr>
<tr><th align='left'>VLM Brand</th><td>Pete &amp; Gerry&#x27;s</td></tr>
<tr><th align='left'>VLM Variant</th><td>Organic</td></tr>
<tr><th align='left'>VLM Family</th><td>dairy</td></tr>
<tr><th align='left'>VLM Container</th><td>clamshell</td></tr>
<tr><th align='left'>VLM Confidence</th><td>0.8</td></tr>
<tr><th align='left'>Resolver Brand</th><td>Pete &amp; Gerry&#x27;s Organic Eggs</td></tr>
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
  &quot;container_spec&quot;: &quot;12 Fresh Brown Eggs&quot;,
  &quot;size_text&quot;: &quot;Grade A Large&quot;,
  &quot;best_catalog_match&quot;: &quot;egg carton&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;evidence&quot;: [&quot;logo&quot;, &quot;text&quot;],
  &quot;notes&quot;: &quot;The image shows a package of eggs with organic and free-range certifications.&quot;
}
```</pre>
<p><strong>Resolver Raw</strong></p><pre> {
  &quot;brand&quot;: &quot;Pete &amp; Gerry&#x27;s Organic Eggs&quot;,
  &quot;product_variant&quot;: &quot;Organic&quot;,
  &quot;product_family&quot;: &quot;dairy&quot;,
  &quot;container_type&quot;: &quot;clamshell&quot;,
  &quot;container_spec&quot;: &quot;12 Fresh Brown Eggs, Grade A Large&quot;,
  &quot;size_text&quot;: &quot;Grade A Large&quot;,
  &quot;confidence&quot;: 0.8,
  &quot;reasons&quot;: []
}</pre>
</details>
