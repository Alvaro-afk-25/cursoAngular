package com.api.walmartbarras.controlador;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Random;
import java.awt.image.BufferedImage;

import javax.imageio.ImageIO;


import org.apache.catalina.connector.Response;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.WriterException;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.oned.Code128Writer;
import com.google.zxing.qrcode.QRCodeWriter;
import com.google.zxing.client.j2se.BufferedImageLuminanceSource;
import com.google.zxing.client.j2se.MatrixToImageConfig;
import com.google.zxing.client.j2se.MatrixToImageWriter;

@RestController
public class barcodeController {
    @GetMapping(value = "/barcode", produces = MediaType.IMAGE_PNG_VALUE)
    public ResponseEntity<byte[]> generarBarcode(){
        String barcodeData = generateBarcodeData("2023-03-16");
        try {
///            byte[] barcodeImage= generateBarcodeImage(barcodeData);
   //         return ResponseEntity.ok().body(barcodeImage);
   System.out.println(barcodeData);         
   return null;
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).build();

        }

    }
    public static String generateBarcodeData (String dateString){
        Random ramdom = new Random();
        String ramdomDigits = String.format("0%05d", ramdom.nextInt(100000));
        String barcodeData = "4210" + dateString.replace("-", "")+ ramdomDigits;
        return barcodeData;
    }
    
/*  public static byte[] generateBarcodeImage (String barcodeData) throws WriterException {
        Code128Writer barcodeWriter = new Code128Writer();
        BitMatrix bitMatrix = barcodeWriter.encode(barcodeData, BarcodeFormat.CODE_128, 400, 200);
        BufferedImage image = MatrixToImageWriter.toBufferedImage(bitMatrix);
        byte[] imageBytes=null;

        try {
            BufferedImage bufferedImage = new BufferedImage(image.getWidth(), image.getHeight(), BufferedImage.TYPE_BYTE_GRAY);
            bufferedImage.getGraphics().drawImage(image, 0, 0, null);
            imageBytes = ImageIO.write(bufferedImage, "png", new ByteArrayOutputStream());
        } catch (Exception e) {
            // TODO: handle exception
        }
            return imageBytes;
    }
 */
  
}