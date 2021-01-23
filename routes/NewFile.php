     <div class="col-xs-12 fixed">
						Color:
                 
                                <ul class="check-box-list layered-content filter-color">
				<?php $s=0;
    foreach($color as $crow){
                       ?>
                       <div class="row">
                                    <li class="activit col-md-2">
                                  <input type="checkbox" id="color<?php echo $s ?>" value="<?php echo $crow->name ?>" class="activit" name="color[]" />
                                     <label style="background:<?php echo $crow->name ?>;" for="color<?php echo $s ?>"><span class="button"></span></label>
                                     
                                
                                     
                                    </li>
                                    <div class="col-md-8">
                     <?php $i=1;
			   foreach($size as $srow){
           echo "$srow->name<input type='checkbox' name='size[$s][]' value='$srow->name' style='margin:5px;'>";
           
            echo "Qty<input type='number' name='qty[$s][]' min='0' value='' style='width:50px;margin: 0px 10px;'>";
            
             echo "Bulk Qty<input type='number' name='bulkqty[$s][]' min='0' value='' style='width:50px;margin: 0px 10px;'>";
				$i++; }
		   ?>
		   </div>       
		 
                                    </div>
									<?php $s++;} ?>
									
									
									</ul>
								
         
          
            
                </div>