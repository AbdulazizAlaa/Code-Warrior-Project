<?php header('Access-Control-Allow-Origin: *'); ?>
<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Parser extends CI_Controller{
    
    function index(){
    }
    
    public function compile() {
		$code = $this -> input -> get("code_text");
		$code_array = $this -> parse_text($code);
		$commands = $this -> generate_json_commands($code_array);
        
        echo $commands;
		/*
		 echo "<pre>";
		 var_dump($code_array);
		 echo "</pre>";*/

	}

	public function generate_json_commands($code_array) {
		$array_length = count($code_array);
        
		for ($i = 0; $i < $array_length; $i++) {
			if (isset($code_array[$i]["type"])) {
				$internal_array_length = count($code_array[$i]["code"]);
				$code_array[$i]["length"] = $internal_array_length;
				
				for ($k = 0; $k < $internal_array_length; $k++) {
					$code_array[$i]["code"][$k] = $this -> identify_function($code_array[$i]["code"][$k]);
				}
			} else {
				$code_array[$i] = $this -> identify_function($code_array[$i]);
			}
		}

        return '{"length" : '.$array_length.', "data" : '.json_encode($code_array).'}';
		//echo '{"length" : '.$array_length.', "data" : '.json_encode($code_array).'}';
		/*
		echo "<br>";
		
				echo "<pre>";
				var_dump($code_array);
				echo "</pre>";*/
		
	}

	public function parse_text($code_text) {
		$code_array = array();
		//$code_text = $this -> input -> post("text");
		$code_array_temp = explode(";", $code_text);
		$code_array_length = count($code_array_temp);
        
		$i = 0;
		for (; $i < $code_array_length; $i++) {
			$code_line_length = strlen($code_array_temp[$i]);
			if ($this -> is_conditional($code_array_temp[$i])) {
				$code_array[$i] = array("type" => "if", "condition" => $this -> get_Parameter($code_array_temp[$i]), "length" => 0, "code" => array());

				$j = $i + 1;
				$k = 0;
				for (; $j < $code_array_length; $j++) {
					if ($code_array_temp[$j] == "endif;") {
						$i = $j;
						break;
					} else {
						$code_array[$i]["code"][$k++] = $code_array_temp[$j];
					}
				}
			} else if ($this -> is_loop($code_array_temp[$i])) {
				$code_array[$i] = array("type" => "loop", "condition" => $this -> get_Parameter($code_array_temp[$i]), "length" => 0, "code" => array());

				$j = $i + 1;
				$k = 0;
				for (; $j < $code_array_length; $j++) {
					if ($code_array_temp[$j] == "endloop;") {
						$i = $j;
						break;
					} else {
						$code_array[$i]["code"][$k++] = $code_array_temp[$j];
					}
				}
			} else {
				$code_array[$i] = $code_array_temp[$i];
			}
		}
		$code_array = array_values($code_array);
        return $code_array;
		
		 /*
		 echo "<pre>";
				  var_dump($code_array);
				  echo "</pre>";*/
	}

	public function identify_function($function) {
		if ($this -> is_wait($function)) {
			return 0;
		} else if ($this -> is_move_up($function)) {
			return 1;
		} else if ($this -> is_move_down($function)) {
			return 2;
		} else if ($this -> is_move_right($function)) {
			return 3;
		} else if ($this -> is_move_left($function)) {
			return 4;
		} else {
			return 5;
		}
	}

	public function clear_code_lines($code_line) {
		for ($i = 0; $i < strlen($code_line); $i++) {
			if ($code_line[$i] == "(") {
				return substr($code_line, 0, $i);
			}
		}
		return "";
	}

	public function get_Parameter($line) {
		$length = strlen($line);
		for ($i = 0; $i < $length; $i++) {
			if ($line[$i] == '(') {
				for ($j = $i; $j < $length; $j++) {
					if ($line[$j] == ')') {
						return substr($line, $i + 1, $j - $i - 1);
					}
				}
			}
		}
	}

	public function is_wait($input) {
		return strpos($input, "wait") === 0 ? true : false;
	}

	public function is_move_up($input) {
		return strpos($input, "moveUp") === 0 ? true : false;
	}

	public function is_move_down($input) {
		return strpos($input, "moveDown") === 0 ? true : false;
	}

	public function is_move_right($input) {
		return strpos($input, "moveRight") === 0 ? true : false;
	}

	public function is_move_left($input) {
		return strpos($input, "moveLeft") === 0 ? true : false;
	}

	public function is_loop($input) {
		return strpos($input, "loop") === 0 ? true : false;
	}

	public function is_conditional($input) {
		return strpos($input, "if") === 0 ? true : false;
	}

	public function is_function($input) {
		$input = str_replace(";", "", $input);
		if (is_loop($input))
			return false;
		if (is_conditional($input))
			return false;
		return (in_array($input, $this -> get_function()));
	}
    
}


?>